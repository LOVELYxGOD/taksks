import { Creator } from "../tools/creator";
import {
  headerParams,
  logoParams,
  logoTitleParams,
  nightButtonParams,
  wraperLogoParams,
} from "./params/header-params";

export class HeaderView {
  constructor() {
    this.headerElement = null;
    this.nightButton = null;
    this.logoElement = null;
    this.build();
  }
  build() {
    this.headerElement = new Creator(headerParams).getElement();

    const logoElement = new Creator(wraperLogoParams).getElement();
    const logoImg = new Creator(logoParams).getElement();
    const logoTitle = new Creator(logoTitleParams).getElement();
    console.log(logoElement, logoImg, logoTitle);

    logoElement.append(logoImg, logoTitle);

    this.nightButton = new Creator(nightButtonParams).getElement();

    this.headerElement.append(logoElement);
  }
}
