import domObject from "./DOM/dom.js";
import internalObject from "./internal/internal.js";
let date = new Date();


const internal = new internalObject();
const dom = new domObject(internal);
//internal.getWeather('Philippines',null,null);
//internal.getWeather('philippines',parseInt(date.getTime()/1000),parseInt(date.getTime()/1000));
