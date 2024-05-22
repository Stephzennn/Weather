import { ToDo } from "./ToDo";
class Project {
    constructor(name){
        this.name = name
        this.todos = []
        this.DueDate;
        this.Priority;
    }

    getDueDate() {
        return this.DueDate;
    }

    setDueDate(newDueDate) {
        this.DueDate = newDueDate;
    }


    getPriority() {
        return this.Priority
    }

    setPriority(newPriority){
        this.Priority = newPriority;
    }

    getName() {
        return this.name;
    }

    getArray() {
        return this.todos;
    }
    setName(newName) {
        this.name = newName;
    }

    add(ToDo) {
        this.todos.push(ToDo)
    }

    find(ToDo){
        for(let x = 0; x < this.todos.length ; x++){
            if(this.todos[x] === ToDo){
                return x
            }
        }
        return -1;
    }
    delete(ToDo){
        let num = this.todos.indexOf(ToDo)
        if (num != -1){
            this.todos.splice(num, 1)
        }
    }
    copyJson(obj){
        this.name = obj.name
        
        this.DueDate = obj.DueDate
        this.Priority = obj.Priority
        obj.todos.map(Objects =>{
            let instance = new ToDo("")
            instance.copyJson(Objects)
            this.todos.push(instance)
        })
        
    }

    isequal(obj){
        if (this.name !== obj.getName()){
            return false
        }
        else if (this.DueDate !== obj.getDueDate()) {
            return false
        }
        else if (this.Priority != obj.getPriority()){
            return false
        }
        
        this.todos.map((object, index)=>{
            let arr = obj.getArray()
         
            if (object.isequal(arr[index]) == false){
                return false
            }
        })
        return true
    }
}


export {Project};