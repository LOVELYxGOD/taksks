import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.setLisener();
  }
  setLisener() {
    this.view.header.nightButton.addEventListener("click", () => {
      console.log("КНОПКА НАЖАТА");
      this.view.setDarkMode();
    });
  }
}
