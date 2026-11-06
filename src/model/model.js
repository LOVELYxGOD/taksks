export class Model {
  constructor() {
    this.isNightMode = true;
    this.getNightMode();
  }

  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  getLocalStorage(key) {
    const data = localStorage.getItem(key);

    if (data) {
      return data;
    } else {
      return null;
    }
  }

  switchTheme() {
    if (this.isNightMode) {
      this.isNightMode = false;
    } else {
      this.isNightMode = true;
    }
    this.setLocalStorage("isNightMode", this.isNightMode);
  }
  getNightMode() {
    const data = this.getLocalStorage("isNightMode");
    if (data !== null) {
      this.isNightMode = data === "true";
    } else {
      this.setLocalStorage("isNightMode", this.isNightMode);
    }
  }

  getFormData(formElement) {
    const formData = new FormData(formElement);
    console.log(formData.get("title"), formData.get("text"));
  }
}
