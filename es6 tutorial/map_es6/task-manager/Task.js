
export class TaskManager {
    #tasks;
    constructor() {
        this.#tasks = new Map();
    }
    //getter setter method
    get tasks() {
        return this.#tasks;
    }
    //instance method
    addTask(id, description) {
        if (this.#tasks.has(id)) {
            console.log(`Task with id ${id} already exist`);
        }
        else {
            this.#tasks.set(id, description);
            console.log(`Task Added : ${description}`);
        }
    }
    getTask(id) {
        if (this.#tasks.has(id)) {
            return this.#tasks.get(id);
        }
    }
    updateTask(id,newDescription){
      if(this.#tasks.get(id)){
        this.#tasks.set(id,newDescription);
        console.log(`Task updated : ${newDescription}`);
      }
      else{
       console.log(`Task with ${id} doe not exist`);
      }
    }
    deleteTask(id){
        console.log("Inside model class deleteTask",id);
     if(this.#tasks.has(id)){
        console.log("Id to be deleted : "+id);
        this.#tasks.delete(id);
        console.log(`Task with id ${id} deleted`);
     }
     else{
        console.log("Id not found");
     }
    }
    listOfTasks(){
        if(this.#tasks.size == 0){
            console.log(`No Task available`);
        }
        else{
            this.#tasks.forEach((task)=>{
                console.log(`(${task.id} : ${task.description}), `);
            })
        }
    }

}