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
  }
  getElement() {
    return this.element;
  }
  setText() {
    this.element.innerText = this.params.text;
  }
  setAtribut() {
    for (const key in this.params.atr) {
      console.log(key, this.params.atr[key]);
    }
  }
}
