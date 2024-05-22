import './style.css'
import { ToDo } from './ToDo'
import { Project } from './Projects';
import { createChecklistObject } from './ToDoChecklist'

function Block(todoBoard,activeProject) {
    

    let addBlock = document.createElement("div")
    addBlock.classList.add("addBlock")

    let leftline = document.createElement("div")
    leftline .classList.add("leftline")
    let leftup = document.createElement("div")
    leftup.classList.add("bottom")
    let leftdown = document.createElement("div")
    leftdown.classList.add("up")

    leftline.appendChild(leftup)
    leftline.appendChild(leftdown)


    let rightline = document.createElement("div")
    rightline.classList.add("rightline")
    let rightup = document.createElement("div")
    rightup.classList.add("bottom")
    let rightdown = document.createElement("div")
    rightdown.classList.add("up")

    rightline.appendChild(rightup)
    rightline.appendChild(rightdown)


    let addButton = document.createElement("div")
    addButton.classList.add("addButton")
    addButton.textContent = " + Add Block"
    addButton.addEventListener("click", ()=>{
        let body = document.querySelector("body")
        let TransparentDiv = document.createElement("div")
        TransparentDiv.classList.add("darkDiv")
        TransparentDiv.style.opacity = "0"
        


        todoBoard.removeChild(addBlock)
        let overallDiv = document.createElement("div")
        overallDiv.classList.add("overallDiv")
        overallDiv.classList.add("firstdiv")
        let inputFirst = document.createElement("input")
        inputFirst.type = "checkbox"
        
        let inputBlock = document.createElement("input")
        inputBlock.style.marginLeft = "2%"

        inputBlock.style.width = "100%"
        inputBlock.classList.add("inputTextBlock")
        overallDiv.appendChild(inputFirst)
        overallDiv.appendChild(inputBlock)
        TransparentDiv.addEventListener("click", ()=>{
            let inputer = todoBoard.querySelector(".inputTextBlock")
            
            if (inputer.value != ""){
                let num = new ToDo(inputer.value)
                let arrays = JSON.parse(localStorage.getItem('array'));
                let arrays2 = []
                arrays.map(Projects=>{
                    let instance = new Project("")
                    instance.copyJson(Projects)
                    arrays2.push(instance)
                })
                let index;
               
                arrays2.map((proj,ind)=>{
                    
                    if (proj.isequal(activeProject)){
                        index = ind;
                        
                    }
                    
                })
                activeProject.add(num)
                arrays[index] = activeProject
                localStorage.setItem('array', JSON.stringify(arrays));
                let tempox = createChecklistObject(num)
                todoBoard.replaceChild(tempox,overallDiv)
                
            }
            else {
                todoBoard.removeChild(overallDiv)
            }
            
            

            todoBoard.removeChild(TransparentDiv)
        })
        todoBoard.appendChild(TransparentDiv)
        todoBoard.appendChild(overallDiv)
        todoBoard.appendChild(Block(todoBoard,activeProject))

    })
    addBlock.appendChild(leftline)
    addBlock.appendChild(addButton)
    addBlock.appendChild(rightline)


    return addBlock


}

export {Block}