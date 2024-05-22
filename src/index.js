import {initialization as start} from './UI';
import { ToDo } from './ToDo';
import { Project } from './Projects';
let totalArray = []
// 






let g = new ToDo("Hello there");

let f = new ToDo("How are you");
let z = new ToDo("Ofcourse bro");
let b = new ToDo("See you");
let newproj = new Project("Baldurs gate 3")
newproj.setPriority("4")
newproj.setDueDate("5/28/2024")
let newproj1 = new Project("Witcher 3")
newproj1.setPriority("2")
newproj1.setDueDate("6/10/2024")

newproj1.add(z)
newproj1.add(b)

newproj.add(g)

newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)



totalArray.push(newproj1)
totalArray.push(newproj)
///*
if (localStorage.array == undefined) {
    localStorage.setItem('array', JSON.stringify(totalArray));
   
    
}
else{
    //totalArray = localStorage.array
    let newArray = JSON.parse(localStorage.getItem('array'));
    let newArray2 = []
    newArray.map(Projects=>{
        let instance = new Project("")
        instance.copyJson(Projects)
        newArray2.push(instance)
    })
   
    totalArray = newArray2
}

//*/


start(totalArray);
//localStorage.removeItem('array');
