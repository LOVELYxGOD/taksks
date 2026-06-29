import { Creator } from "../tools/creator";

export class View {
  constructor() {
    this.appContainer = document.querySelector("#app");
    this.testElement = new Creator({
      tagName: "div",
      classList: [],
      atr: {
        id: 3,
      },
      text: "Hello world!",
    });
  }
}
