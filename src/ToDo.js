class ToDo {
    
    constructor(description){
        this.description = description
        this.status;
    } 

    getDescription() {
        return this.description
    }

    setDescription(newDescription){
        this.description = newDescription;
    }

    setStatus(string){
        this.status = string;
    }
    getStatus(){
        return this.status;
    }
    copyJson(obj){
        this.description = obj.description
        this.status = obj.status
    }    

    isequal(obj){
        if (this.description !== obj.getDescription()){
            return false
        }
        else if (this.status !== obj.getStatus()) {
            return false
        }
        else{
            return true
        }
    }
}

export {ToDo}