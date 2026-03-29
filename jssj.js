// // // // // // function task1(callback){
// // // // // //     setTimeout(()=>{
// // // // // //             console.log("task1-1 completed");
// // // // // //             callback();
// // // // // //     },1000);
// // // // // // }
// // // // // // function task2(callback){
// // // // // //     setTimeout(()=>{
// // // // // //             console.log("task1-2 completed");
// // // // // //                 callback();
// // // // // //     },4000);
// // // // // // }
// // // // // // function task3(callback){
// // // // // //     setTimeout(()=>{
// // // // // //             console.log("task1-3 completed");
// // // // // //             callback();

// // // // // //     },1500);
// // // // // // }
// // // // // // function task4(callback){
// // // // // //     setTimeout(()=>{
// // // // // //             console.log("task1-4 completed");
// // // // // //             callback();
// // // // // //     },1350);
// // // // // // }


// // // // // // task1(() => {
// // // // // //     task2(() => {
// // // // // //         task3(() => {
// // // // // //             task4(() => console.log("All tasks completed"));
// // // // // //             })
// // // // // //         });
// // // // // // })


// // // // // // Promise-based approach
// // // // // function walkDog(){  
// // // // //     return new Promise((resolve,reject) =>{
// // // // //          setTimeout(()=>{
// // // // //         resolve("Dog walked");
// // // // //     },1500);
// // // // //     })
// // // // // }
// // // // // function cleanthekitchen(){
// // // // //   return new Promise((resolve,reject) =>{ 
// // // // //     setTimeout(()=>{
// // // // //         resolve("Kitchen cleaned");
// // // // //     },2500);
// // // // // })
// // // // // }
// // // // // function takeoutTrash(){
// // // // //   return new Promise((resolve,reject) =>{
// // // // //     setTimeout(()=>{
// // // // //         resolve("Trash taken out");
// // // // //     },500);
// // // // // })
// // // // // }

// // // // // walkDog().then(value => {console.log(value);
// // // // //     return cleanthekitchen();
// // // // // })
// // // // //          .then(value => {console.log(value);
// // // // //     return takeoutTrash();
// // // // // })
// // // // //          .then(value => {console.log(value);
// // // // //     console.log("All tasks completed");
// // // // // })
// // // // //          .catch(error => console.error(error));

// // // // //  DOM navigation -- FirstElementchild --->

// // // // // const element = document.getElementById("desserts");
// // // // // const firstchild = element.firstElementChild;
// // // // // firstchild.style.backgroundColor = "yellow";

    
// // // // // const element = document.querySelectorAll("ul");
// // // // // element.forEach((element) =>{
// // // // //     const firstchild = element.firstElementChild;
// // // // //     firstchild.style.backgroundColor = "yellow";    
// // // // // })


// // // // // DOM nac=vigation -- lastElementChild --->

// // // // // const ele = document.getElementById("Fruits");
// // // // // const lastchild = ele.lastElementChild;
// // // // // lastchild.style.backgroundColor = "yellow";

// // // // // DOM navigation -- nextElementSibling --->

// // // // // const element = document.getElementById("Fruits");
// // // // // const nextSibling = element.previousElementSibling;
// // // // // nextSibling.style.backgroundColor = "yellow";

// // // // // DOM navigation -- parentElement --->

// // // // // const element = document.getElementById("cake");
// // // // // const parent = element.parentElement;
// // // // // parent.style.backgroundColor = "yellow";

// // // // // DOM navigation -- children --->

// // // // // const element = document.getElementById("vegetables");
// // // // // const children = element.children;
// // // // // children[2].style.backgroundColor = "yellow";
// // // // // console.log(children);

// // // // // Array.from(children).forEach(child => {
// // // // //     child.style.backgroundColor = "yellow";
// // // // // })

// // // // // lesson 5 adding or changing elements in js -->

// // // // const new1 = document.createElement("h1")
// // // // new1.textContent = "hello World" ;
// // // // new1.id="myh1";
// // // // new1.style.color ="red";
// // // // new1.style.textAlign = "center";
// // // // // document.getElementById("box-2").prepend(new1);

// // // // // const box2 = document.getElementById("box-2");
// // // // // document.body.insertBefore(new1, box2); 

// // // // const box = document.querySelectorAll(".box");
// // // // document.body.insertBefore(new1, box[2]);

// // // // document.body.removeChild(new1);


// // // const fruits = document.createElement("li")
// // // fruits.textContent = "Mango";
// // // // fruits.id = "mango";

// // // // const orange = document.getElementById("orange");
// // // // orange.parentElement.insertBefore(fruits, orange);


// // // const fruitslist = document.querySelectorAll("#fruits li");
// // // document.getElementById("fruits").insertBefore(fruits, fruitslist[1]);


// // // eventlisten---->


// // const mybox = document.getElementById("mybox");
// // mybox.addEventListener("click", ()=>{
// //     mybox.style.backgroundColor = "lightblue";
// //     mybox.textContent = "ouch 💀";
// // })

// // mybox.addEventListener("mouseover", ()=>{
// //     mybox.style.backgroundColor = "lightpink";
// //     mybox.textContent = "hovering 🐱‍👤";
// // })
// // mybox.addEventListener("mouseout", ()=>{
// //     mybox.style.backgroundColor = "tomato";
// //     mybox.textContent = "Hello 🐱‍👤";
// // })


// // const btn = document.getElementById("btn");
// // btn.addEventListener("click", ()=>{
// //     mybox.style.backgroundColor = "lightgreen";
// //     mybox.textContent = "Button clicked 🐱‍👤";
// // })

// // document.addEventListener("keydown", event =>{
// //     console.log(event);
// //     })

// // // document.addEventListener("keyup", event =>{
// // //     console.log(`Key released: ${event.key}`);
// // //     })


// function Walkdog(){
//     return new Promise((resolve,reject) =>{
//          setTimeout(()=>{
//         resolve("Dog walked");
//     },1500);    
//     })

// }
// function cleanthekitchen(){
//   return new Promise((resolve,reject) =>{ 
//     setTimeout(()=>{
//         resolve("Kitchen cleaned");
//     },2500)
// })
// }

// function takeoutTrash(){
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("Trash taken out");
//     },500)
// })  
// }

// async function performTasks(){

//     const walkresult = await Walkdog();
//     console.log(walkresult);

//     const trashresult = await takeoutTrash();
//     console.log(trashresult);

//     const cleanresult = await cleanthekitchen();
//     console.log(cleanresult);   

//     console.log("All tasks completed");

// }

// performTasks();

const jsonnames= `["Alice", "Bob", "Charlie"]`;

const jsonperson = `{
    "name": "John Doe",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["reading", "traveling", "coding"]
}`;


const jsonpeople = `[{
    "name": "Alice",
    "age": 28,
    "isEmployed": true,
    "hobbies": ["painting", "hiking", "cooking"]
},
{
    "name": "Bob",
    "age": 35,
    "isEmployed": false,
    "hobbies": ["gaming", "fishing", "gardening"]
},
{
    "name": "Charlie",
    "age": 22,
    "isEmployed": true,
    "hobbies": ["music", "sports", "photography"]
}]`

// const jsonString = JSON.stringify(names);
// console.log(jsonString);
// const personString = JSON.stringify(person);
// console.log(personString);
// const peopleString = JSON.stringify(people);
// console.log(peopleString);


// const parsedNames = JSON.parse(jsonnames);
// console.log(parsedNames);
// const parsedperson = JSON.parse(jsonperson);
// console.log(parsedperson);
// const parsedpeople = JSON.parse(jsonpeople);
// console.log(parsedpeople);

// fetch("people.json")
//     .then(response => response.json())
//     .then(data => data.forEach(person => console.log(person)))
//     // .catch(error => console.error("Error fetching people:", error));


// const timer1 = setTimeout(()=>{
//     console.log("Timer 1 completed");
// },1000);
// docue
// const timer2 = setInterval(()=>{
//     console.log("Current Time:");
// },2000);

// const setter = document.addEventListener("keydown",()=>{
//     console.log("Event listener triggered");
// },false);