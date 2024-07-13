

import {UI} from "./UI.js";


let uiObj = new UI();
uiObj.printTasks();
document.getElementById("save_btn").addEventListener("click",function(){
    uiObj.addTask();
})