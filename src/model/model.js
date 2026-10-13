export class Model {
  constructor() {
    this.isNightMode = true;
    // здесь вызвать метод который будет делать запо=рос в локалку и выяснять есть ли там isnightmode
    // если isnightmode есть в локалки - вернуть значение если нету в локалки установить текущее значение из модели
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
  // метод создать ЗДЕСЬ
}
