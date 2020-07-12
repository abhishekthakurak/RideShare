import PageFrame from "../../components/PageFrame";
import './style.css'
import Input from "../../components/Input";
import questions from "./questions";
import { getCabs } from './searchMock'
import List from "../../components/List";
import Button from "../../components/Button";

const excludeIds = ['source', 'destination']
export default class Search {

  constructor(reRender) {
    this.reRender = reRender
    this.state = {
      source: '',
      destination: ''
    }
    this.cars = getCabs(this.state)
    this.selectedCarId = null
  }

  onInputChange(id, value) {
    this.state[id] = value
    this.cars = getCabs(this.state)
    let searchResultWrapper = document.getElementById('list-wrap')
    let searchResults = new List({ data: this.cars, selectedId: this.selectedCarId})
    searchResultWrapper.innerHTML = searchResults.render()
  }

  getSearchContent() {
    let sourceInput = new Input({ data: questions[0], value: this.state.source, className: 'search-input-wrap' })
    let destinationInput = new Input({ data: questions[1], value: this.state.destination, className: 'search-input-wrap' })
    let searchResults = new List({ data: this.cars, selectedId: this.selectedCarId})
    const confirm = new Button({
      id: "confirm",
      btnText: "CONFIRM",
      className: `confirm-btn ${!this.selectedCarId ? 'disable-btn' : ''}`
    });
    return `
      <div>
        <div class='upper-section'>
          ${sourceInput.render()}
          ${destinationInput.render()}
        </div>
        <div class='list-wrap' id='list-wrap'>
          ${searchResults.render()}
        </div>
          ${confirm.render()}
      </div>
    `;
  }
  render() {
    const pageFrame = new PageFrame("Pick A Ride", this.getSearchContent(), true);
    return pageFrame.render();
  }

  attachListener() {
    // delegating events
    const containerDiv = document.getElementById("app"); // attaching events on the top
    containerDiv.onclick = event => {
      let eventId = event.target.id
      if (excludeIds.includes(eventId)) {
        return
      }
      if (eventId) {
        if (eventId === 'confirm') {
          window.open('/success', '_self')
          return
        }
        if (this.selectedCarId !== parseInt(eventId)) {
          this.selectedCarId = parseInt(eventId)
        } else {
          this.selectedCarId = null
        }
        this.reRender()
      }
    };
    containerDiv.oninput = event => {
      this.onInputChange(event.target.id, event.target.value);
    };
  }
}
