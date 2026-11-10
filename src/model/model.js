export class Model {
  constructor() {
    this.isNightMode = true;
    this.getNightMode();
    this.notes = this.getData() || [];
    console.log(this.notes);
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

  prepareFormData(formElement) {
    const formData = new FormData(formElement);

    const event = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const data = {
      date: event.toLocaleString("ru-RU", options),
      title: formData.get("title"),
      text: formData.get("text"),
    };
    console.log(data);

    this.addNote(data);
  }

  addNote(data) {
    this.notes.push(data);
    this.setData(this.notes);
  }

  setData(data) {
    this.setLocalStorage("notes", JSON.stringify(data)); // эта строка не моя
  }
  getData() {
    return JSON.parse(this.getLocalStorage("notes"));
  }
}
