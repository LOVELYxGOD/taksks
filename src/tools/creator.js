// const testParams = {
// tagName: 'div',
// classList: [],
// atr: {
//     id: 3,
// },
// text: 'Hello world!'
// }

export class Creator {
  constructor(params) {
    this.element = null;
    this.params = params;
    this.createTag();
  }
  createTag() {
    this.element = document.createElement(this.params.tagName);
    this.setText();
    this.setAtribut();
    this.setClass();
  }
  getElement() {
    return this.element;
  }
  setText() {
    if (this.params && this.params.text) {
      this.element.innerText = this.params.text;
    }
  }
  setAtribut() {
    for (const key in this.params.atr) {
      this.element.setAttribute(key, this.params.atr[key]);
    }
  }
  setClass() {
    if (this.params && this.params.classList)
      this.element.classList.add(...this.params.classList);
  }
}
