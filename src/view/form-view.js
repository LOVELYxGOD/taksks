import { Creator } from "../tools/creator";
import {
  bodyParams,
  cancelParams,
  contentTitleContainerParams,
  createParams,
  fakeCheckBoxParams,
  footerParams,
  formCheckBoxParams,
  formParams,
  headerButtonParams,
  headerContainerParams,
  headerFormIconParams,
  headerFormTextParams,
  headerParams,
  inputTitleParams,
  labelParams,
  markerParams,
  NameTitleContainerParams,
  textAreaParams,
  titleBodyParams,
  topContainerParams,
} from "./params/form-params";

export class FormView {
  constructor() {
    this.formElement = null;
    this.build();
  }

  build() {
    this.formElement = new Creator(formParams).getElement();

    const formHeader = new Creator(headerParams).getElement();
    const formImg = new Creator(headerFormIconParams).getElement();
    const formTitle = new Creator(headerFormTextParams).getElement();
    const formTitleContainer = new Creator(headerContainerParams).getElement();
    const formButton = new Creator(headerButtonParams).getElement();
    formTitleContainer.append(formImg, formTitle);
    formHeader.append(formTitleContainer, formButton);
    this.formElement.append(formHeader);

    const formBody = new Creator(bodyParams).getElement();
    const formTitleHeading = new Creator(titleBodyParams).getElement();
    const formInputName = new Creator(inputTitleParams).getElement();

    const formTitleTextArea = new Creator(textAreaParams).getElement();
    const forInputContent = new Creator(NameTitleContainerParams).getElement();
    const formNameTitleContainer = new Creator(
      NameTitleContainerParams,
    ).getElement();
    const topContainer = new Creator(topContainerParams).getElement();
    const formContentTitleContainer = new Creator(
      contentTitleContainerParams,
    ).getElement();

    const formCheckBox = new Creator(formCheckBoxParams).getElement();
    const fakeCheckBox = new Creator(fakeCheckBoxParams).getElement();
    const marker = new Creator(markerParams).getElement();
    const label = new Creator(labelParams).getElement();
    fakeCheckBox.append(marker);
    label.append(formCheckBox, fakeCheckBox);
    topContainer.append(formNameTitleContainer, label);

    formNameTitleContainer.append(formTitleHeading, formInputName);
    topContainer.append(formNameTitleContainer, label);
    formContentTitleContainer.append(formTitleTextArea, forInputContent);
    formBody.append(topContainer, formContentTitleContainer);
    this.formElement.append(formBody);

    const formFooter = new Creator(footerParams).getElement();
    const formCancel = new Creator(cancelParams).getElement();
    const formCreate = new Creator(createParams).getElement();
    formFooter.append(formCancel, formCreate);
    this.formElement.append(formFooter);
  }

  //     get form() {
  //         return this.formElement;
  //     }
}
