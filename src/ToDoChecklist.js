import './style.css'

          
function createChecklist(textContent) {
    let firstdiv = document.createElement("div")
    firstdiv.classList.add("firstdiv")
    let input1 = document.createElement("input")
    input1.classList.add("input1")
    let label1 = document.createElement("label")
    label1.classList.add("label1")
    input1.type = "checkbox"
    input1.name = "todo"
    input1.value = textContent
    label1.htmlFor = textContent
    label1.textContent = textContent
    firstdiv.appendChild(input1)
    firstdiv.appendChild(label1)

    return firstdiv


}

function createChecklistObject(object) {
    let ob = createChecklist(object.getDescription())
    let obinput = ob.querySelector(".input1")
    
    if (object.getStatus() != undefined)
    obinput.checked = object.getStatus()
    
   return ob;
}


function listAllChecklist(activeProject,todoTitle,todoBoard ) {
    todoTitle.classList.add("todoTitle")
    let todoTitleul = document.createElement("ul")
    let todoTitleli = document.createElement("li")

    todoTitleli.textContent = activeProject.getName()
    todoTitleul.appendChild(todoTitleli)
    todoTitle.appendChild(todoTitleul)
    let UnderBox = document.createElement("div")
    
    UnderBox.classList.add("UnderBox")

    let DueDate = document.createElement("div")
    DueDate.classList.add("DueDate")
    
    let DueDateLabel = document.createElement("div")
   
    DueDateLabel.classList.add("DueDateLabel")

    let DueDateLabelIcon = document.createElement("div")
    DueDateLabelIcon.classList.add('icons')
    DueDateLabelIcon.classList.add('DueDateLabelIcon')
    
    DueDateLabel.appendChild(DueDateLabelIcon)

    let DueDateWord = document.createElement("div")
    DueDateWord.textContent = "Due Date"
    DueDateLabel.appendChild(DueDateWord)


    let DueDateDate = document.createElement("div")
    DueDateDate.classList.add("DueDateDate")
    DueDateDate.textContent = activeProject.getDueDate()
    DueDate.appendChild(DueDateLabel)
    DueDate.appendChild(DueDateDate)
    

    let priority = document.createElement("div")
    priority.classList.add("priority")
    let priorityLabel = document.createElement("div")
    priorityLabel.classList.add("priorityLabel")


    let priorityLabelIcon = document.createElement("div")
    priorityLabelIcon.classList.add('icons')
    priorityLabelIcon.classList.add('priorityLabelIcon')


    priorityLabel.appendChild(priorityLabelIcon)


    let priorityWord = document.createElement("div")
    priorityWord.textContent = "Priority"
    priorityLabel.appendChild(priorityWord)
    
    let priorityNum = document.createElement("div")
    priorityNum.classList.add("priorityNum")

    priorityNum.textContent = "Number: " + activeProject.getPriority()

    DueDate.classList.add("whiteBorder")
    priority.classList.add("whiteBorder")

    priority.appendChild(priorityLabel)
    priority.appendChild(priorityNum)
    UnderBox.appendChild(DueDate)
    UnderBox.appendChild(priority)

    todoTitle.appendChild(UnderBox)

    activeProject.getArray().map(function(num){
        
        
        todoBoard.appendChild(createChecklistObject(num))
        

    })
    return
}
export {createChecklist, createChecklistObject,listAllChecklist};