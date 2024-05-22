import './style.css'
import { createChecklist  } from './ToDoChecklist'
import { createProjectList, createNewProject ,integrateProject} from './ProjectLists'
import { createChecklistObject } from './ToDoChecklist'
import { listAllChecklist } from './ToDoChecklist'
import { Project } from './Projects'
import { Block } from './Block'
import { header as headerInner } from './Header'
function initialization(arrays) {
    
let g = document.querySelector('body')

g.classList.add("body")

let header = document.createElement("div")
header.classList.add("header")

header.appendChild(headerInner())



let project = document.createElement("div")
project.classList.add("project")



let projectTile = document.createElement("div")
projectTile.classList.add("projectTile")
projectTile.textContent = "Projects"
project.appendChild(projectTile)

let projectList = document.createElement("div")
projectList.classList.add("projectList")



let todoBoard = document.createElement("div")

let todoTitle = document.createElement("div")
todoTitle.classList.add("todoTitle")
todoBoard.classList.add("todoBoard")
todoBoard.appendChild(todoTitle)
let activeProject = new Project("")


let newProject = createNewProject(arrays,projectList,todoBoard)

project.appendChild(newProject)
//li that will be gotten from the server 
if(arrays.length !== 0){
    activeProject = arrays[0]
    
   
    arrays.map(function(num){
        
        let tempo = createProjectList(num)
        tempo.addEventListener("click" , ()=>{
            todoBoard.replaceChildren()
            let todoTitle = document.createElement("div")
            todoTitle.classList.add("todoTitle")
            
            todoBoard.appendChild(todoTitle)
            listAllChecklist(num,todoTitle,todoBoard)
            todoBoard.appendChild(Block(todoBoard, activeProject))
            localStorage.setItem('array', JSON.stringify(arrays));
            
        })
        projectList.appendChild(tempo)
        
        
       
    })
}
listAllChecklist(activeProject,todoTitle,todoBoard)

project.appendChild(projectList)



let addBlock = Block(todoBoard,activeProject);

todoBoard.appendChild(addBlock)
let headerParent = document.createElement("div")
headerParent.classList.add("headerParent")

headerParent.appendChild(header)
headerParent.appendChild(todoBoard)

g.appendChild(headerParent)
g.appendChild(project)
}

export  {
    initialization
};
