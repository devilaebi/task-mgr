import { Controller } from "@hotwired/stimulus"
import { get } from '@rails/request.js'
export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello World!"
  }
  change_filter(){
    fetch(`/?get=${event.target.selectedOptions[0].value}`)
      .then(response => response.text())
      .then(data => {
        document.getElementsByClassName('main')[0].innerHTML = data;
      });
  }

}
