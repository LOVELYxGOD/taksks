import { Creator } from "../tools/creator";

export class View {
  constructor() {
    this.appContainer = document.querySelector("#app");
    this.testElement = new Creator({
      tagName: "div",
      atr: {
        id: 3,
        "data-test": "data",
      },
      text: "Hello world!",
      classList: ["w-2xs", "bg-orange-100", "h-100px"],
    });
    this.appContainer.append(this.testElement.getElement());
  }
}
