import { HeaderView } from "./header-view";

export class View {
  constructor() {
    this.appContainer = document.querySelector("#app");
    this.header = new HeaderView();
    this.appContainer.append(this.header.headerElement);
  }
  setDarkMode() {
    const html = document.documentElement;
    html.classList.toggle("dark");
  }
}
