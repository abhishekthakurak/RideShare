import './style.css'
import PageFrame from '../../components/PageFrame';
import success from "../../../assets/success.png";

export default class Success {
  getChildrens() {
    return `
        <div class='success-wrap'>
            <img  src=${success} alt='success image'/>
            <div class='msg-success'>
                Hurray! <br/>
                Your ride is confirmed!
            </div>
        </div>
    `
  }

  render() {
    const pageFrame = new PageFrame("SUCCESS", this.getChildrens());
    return pageFrame.render();
  }
}
