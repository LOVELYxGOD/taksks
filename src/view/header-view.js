import { Creator } from "../tools/creator";
import {
  darkParams,
  headerParams,
  lightParams,
  logoParams,
  logoTitleParams,
  // nightButtonContainerParams,
  nightButtonParams,
  searchInputParams,
  wrapperLogoParams,
} from "./params/header-params";

export class HeaderView {
  constructor() {
    this.headerElement = null;
    this.nightButton = null;
    this.searchInput = null;
    this.build();
  }

  build() {
    this.headerElement = new Creator(headerParams).getElement();

    const logoElement = new Creator(wrapperLogoParams).getElement();
    const logoImg = new Creator(logoParams).getElement();
    const logoTitle = new Creator(logoTitleParams).getElement();

    logoElement.append(logoImg, logoTitle);

    const searchInput = new Creator(searchInputParams).getElement();

    this.nightButton = new Creator(nightButtonParams).getElement();

    // const nightButtonContainer = new Creator(
    //   nightButtonContainerParams,
    // ).getElement();
    const lightImg = new Creator(lightParams).getElement();
    const darkImg = new Creator(darkParams).getElement();

    // nightButtonContainer.append(lightImg, darkImg);

    // darkImg.classList.add("hidden");

    // this.lightImg = lightImg;
    // this.darkImg = darkImg;

    this.nightButton.append(lightImg, darkImg);

    this.headerElement.append(logoElement, searchInput, this.nightButton);
  }
}
