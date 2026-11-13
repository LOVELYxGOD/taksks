import { Creator } from "../tools/creator";
import {
  addNoteParams,
  liParams,
  notesElementParams,
} from "./params/main-params";
import { mainParams } from "./params/main-params";
import { FormView } from "./form-view";

export class MainView {
  constructor(notesList) {
    this.mainElement = null;
    this.addNoteButton = null;
    this.formView = null;
    this.notesList = new NotesListView(notesList);
    this.build();
  }
  build() {
    // this.notesList = new NotesListView()
    this.mainElement = new Creator(mainParams).getElement();
    this.addNoteButton = new Creator(addNoteParams).getElement();
    this.mainElement.append(this.addNoteButton, this.notesList.notesElement);
  }
  addForm() {
    this.formView = new FormView();
    this.mainElement.append(this.formView.formElement);
  }
}

class NotesListView {
  constructor(notesList) {
    this.notesElement = null;
    this.notesList = notesList;
    this.build();
  }
  build() {
    this.notesElement = new Creator(notesElementParams).getElement();
    this.notesList.forEach((element) => {
      const li = new Creator(liParams).getElement();
      li.innerHTML = element.title;
      this.notesElement.append(li);
      console.log(element);
    });
  }
}
