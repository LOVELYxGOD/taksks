import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(this.model.notes);
    this.setLisener();
    this.setStartPosition();
  }
  setLisener() {
    this.view.header.nightButton.addEventListener("click", () => {
      this.model.switchTheme();
      this.view.switchDarkMode();
    });
    this.view.main.mainElement.addEventListener("click", (event) => {
      if (event.target.closest("#addNoteButton")) {
        this.view.main.addForm();
        this.view.main.formView.formElement.addEventListener(
          "submit",
          (event) => {
            event.preventDefault();
            this.model.prepareFormData(event.target);
          },
        );
      }
    });
  }
  setStartPosition() {
    if (!this.model.isNightMode) {
      this.view.setLightMode();
    }
  }
}
