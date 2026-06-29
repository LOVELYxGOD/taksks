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
    console.log(this.params);
  }
}
