
import { TaskManager } from "./Task.js";
export class UI {
    #page;
    #tableBodyRef;
    #taskObj;
    constructor() {
        this.#page = document;
        this.#tableBodyRef = document.getElementById("tbody_task_list");
        this.#taskObj = new TaskManager();
    }

    getPageElementById(id) {
        return this.#page.getElementById(id);
    }

    clearForm() {
        this.#tableBodyRef.innerHTML = "";
        this.getPageElementById("task_id").value = "";
        this.getPageElementById("task_description").value = "";
    }

    addTask() {
        let task_id = this.getPageElementById("task_id").value;
        let task_des = this.getPageElementById("task_description").value;
        this.#taskObj.addTask(task_id, task_des);
        this.printTasks();
    }

    deleteTask(key) {
        if (window.confirm("Do you want to delete the task")) {
            this.#taskObj.deleteTask(key);
            this.printTasks();
        }
    }

    printTasks() {
        this.clearForm();
        this.#tableBodyRef.innerHTML = "";
        if(this.#taskObj.tasks.size>0){
        this.#taskObj.tasks.forEach((value, key) => {
            console.log(`${key} --,-- ${value}`);
            let trRef = this.#page.createElement("tr");
            let tdIdRef = this.#page.createElement("td");
            let tdDesRef = this.#page.createElement("td");
            let tdActionsRef = this.#page.createElement("td");
            let deleteBtnRef = document.createElement("button");
            deleteBtnRef.className = "btn btn-danger btn-sm";
            //classList.add("btn btn-danger btn-sm");
            deleteBtnRef.innerHTML = "X";
            deleteBtnRef.addEventListener("click", () => {
                this.deleteTask(key);
            })
            tdActionsRef.appendChild(deleteBtnRef);
            tdIdRef.innerHTML = key;
            tdDesRef.innerHTML = value;
            trRef.appendChild(tdIdRef);
            trRef.appendChild(tdDesRef);
            trRef.appendChild(tdActionsRef);
            this.#tableBodyRef.appendChild(trRef);
        })
    }
    else{
        let tr = this.#page.createElement("tr");
        let td = this.#page.createElement("td");
        td.style.color="red";
        td.innerHTML = "No Record Found!";
        tr.appendChild(td);
        this.#tableBodyRef.appendChild(tr);
    }


    }
}