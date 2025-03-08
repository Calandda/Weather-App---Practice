import dom from "./DOM/dom.js";
import internal from "./Internal/internal.js";
let date = new Date();
dom.domTest();
internal.internalTest('philippines',null,null);
internal.internalTest('philippines',date.getTime()/1000,date.getTime()/1000);
internal.getWeather();