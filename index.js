//ES6:  * must have type: module in your json to use ES6
import { add, subtract, beBasic } from "./myModule.js";

//const { beBasic } = require("./myModule");

let name = 'Simone';
console.log(name);

console.log(beBasic());

console.log(add(1, 2), subtract(1, 2));