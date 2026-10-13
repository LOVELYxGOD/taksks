import { Controller } from "./controller/controller";
import "./style.css";
new Controller();
localStorage.setItem("test", 1);
alert(localStorage.getItem("test")); // 1
