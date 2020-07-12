import PageFrame from "../../components/PageFrame";

export default class Search {
  getSearchContent() {
    return `<div>I am register</div>`;
  }
  render() {
    const pageFrame = new PageFrame("Pick A Ride", this.getSearchContent());
    return pageFrame.render();
  }
}
