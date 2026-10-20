import { HeaderView } from "./header-view";
import { MainView } from "./main-view";

export class View {
  constructor() {
    this.appContainer = document.querySelector("#app");
    this.header = new HeaderView();
    this.main = new MainView();

    this.appContainer.append(this.header.headerElement, this.main.mainElement);
  }

  switchDarkMode() {
    const html = document.documentElement;

    html.classList.toggle("dark");
  }

  setLightMode() {
    document.documentElement.classList.remove("dark");
  }
}
