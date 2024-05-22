import { listAllChecklist } from './ToDoChecklist'
import { Project } from './Projects'
import { Block } from './Block'
import { header as headerInner } from './Header'
function createProjectList(Project) {
    let projectListli = document.createElement("li")
    //projectListli.textContent = Project.getName();
    
    projectListli.classList.add("projectListli")
    let words = document.createElement("div");
    words.textContent = Project.getName();

    let button = document.createElement('button')
    
    
    projectListli.appendChild(words)
    projectListli.appendChild(button)
    let projectListul = document.createElement("ul")
    projectListul.appendChild(projectListli)
    
    return projectListul
}


function createNewProject(arrays,projectLists,todoBoard){
    let newProject = document.createElement("div")
    newProject.classList.add("newProject")
    let newProjectul = document.createElement("ul")
    let newprojectli = document.createElement("li")
    newprojectli.innerText = "New Project"
    newProjectul.appendChild(newprojectli)
    newProject.appendChild(newProjectul)

    newProject.addEventListener("click" , ()=>{
        let body = document.querySelector("body")
        let darkDiv = document.createElement("div")
        let form = document.createElement("div")
        form.classList.add("formE")
        let insideForm = document.createElement("form")
        insideForm.classList.add("form")
        let label = document.createElement("label")
        label.classList.add("label")
        label.textContent = "Project Name: "
        let input = document.createElement("input")
        input.classList.add("input")
        input.classList.add("ProjectNameInput")
        input.type = "text"



        let labelDate = document.createElement("label")
        labelDate.classList.add("label")
        labelDate.textContent = "Due Date: "
        let inputDate = document.createElement("input")
        inputDate.classList.add("input")
        inputDate.classList.add("DueDateinput")
        
        input.type = "text"
        label.appendChild(input)
        labelDate.appendChild(inputDate)

        let labelPriority = document.createElement("label")
        labelPriority .classList.add("label")
        labelPriority .textContent = "Priority: "
        let inputPriority  = document.createElement("input")
        inputPriority.classList.add("input")
        inputPriority.classList.add("priority1")
        input.type = "text"
        labelPriority.appendChild(inputPriority)
        labelPriority.appendChild(inputPriority)
        
        let blockdiv = document.createElement("div")
        blockdiv.classList.add("blockdiv")
        let Addproject = document.createElement("button")
        Addproject.textContent = "Add Project"
        Addproject.classList.add("shareButton")
        Addproject.classList.add("Addproject")
        Addproject.addEventListener("click", ()=>{
            let projectname = body.querySelector(".ProjectNameInput")
            let dueDate = body.querySelector(".DueDateinput")
            let priority1 = body.querySelector(".priority1")
          
            if (projectname.value != ""){
                let tempox = new Project(projectname.value)
                tempox.setDueDate(dueDate.value)
                tempox.setPriority(priority1.value)
                arrays.push(tempox)
                
                
                let tempobj = createProjectList(tempox)

                integrateProject(tempobj,projectLists, todoBoard, tempox)
                
                projectLists.appendChild(tempobj)
            }
            
            localStorage.setItem('array', JSON.stringify(arrays));
            body.removeChild(darkDiv)
            body.removeChild(form)
        })
        blockdiv.appendChild(Addproject)


        insideForm.appendChild(label)
        insideForm.appendChild(labelDate)
        insideForm.appendChild(labelPriority)
        //blockdiv
        insideForm.appendChild(blockdiv)
        form.appendChild(insideForm)
        darkDiv.addEventListener("click" , ()=>{
            body.removeChild(darkDiv)
            body.removeChild(form)
        })
        darkDiv.classList.add("darkDiv")
        body.appendChild(darkDiv)
        body.appendChild(form)
    })

    
    return newProject
}


function integrateProject(tempo,projectList, todoBoard, ProjectObject){
    
    tempo.addEventListener("click" , ()=>{
        todoBoard.replaceChildren()
        let todoTitle = document.createElement("div")
        todoTitle.classList.add("todoTitle")
        
        todoBoard.appendChild(todoTitle)
        listAllChecklist(ProjectObject,todoTitle,todoBoard)
        todoBoard.appendChild(Block(todoBoard, ProjectObject))
        
    })
    projectList.appendChild(tempo)
}


export{createProjectList, createNewProject, integrateProject}