import { Creator } from "../tools/creator";
import { addNoteParams } from "./params/main-params";
import { mainParams } from "./params/main-params";

export class MainView {
  constructor() {
    this.mainElement = null;
    this.addNoteButton = null;
    this.build();
  }
  build() {
    this.mainElement = new Creator(mainParams).getElement();

    this.addNoteButton = new Creator(addNoteParams).getElement();
    this.mainElement.append(this.addNoteButton);
  }
}
