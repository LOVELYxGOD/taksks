import { Creator } from "../tools/creator";
import { formParams } from "./params/form-params";

export class FormView {
  constructor() {
    this.formElement = null;
    this.build();
  }

  build() {
    this.formElement = new Creator(formParams).getElement();
    // const header = new Creator(headerParams).getElement();
  }
  //     get form() {
  //         return this.formElement;
  //     }
}
