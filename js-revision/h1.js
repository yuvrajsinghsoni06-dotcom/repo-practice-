// // 1. Fixed the spelling and method names
// const decrease_btn = document.getElementById("d-btn"); // Ensure ID matches your HTML
// const reset_btn = document.getElementById("reset-btn");
// const increase_btn = document.getElementById("i-btn"); // Removed the '#'

// // 2. Fixed 'document' casing and used querySelector for the class
// const countLabel = document.querySelector(".Counter");

// let count = 0;

// // 3. Logic remains the same, just using the corrected variables
// increase_btn.onclick = () => {
//     count++;
//     countLabel.textContent = count;
// };

// reset_btn.onclick = () => {
//     count = 0;
//     countLabel.textContent = count;
// };

// decrease_btn.onclick = () => {
//     count--;
//     countLabel.textContent = count;
// };


//--------------------- MAths

// let x = 3.9
// let y = 3.39

// let z;
// // z = Math.round(x)
// z = Math.floor(x)
// z = Math.round(x)

// console.log(z)

// let age = 2;
// if(age > 18){
//     console.log("You have to master yourself")
// }
// else{
//     console.log("Hello Risisng Star")
// }

// let age = 20;
// let hasLicense = true;

// if(age > 16){
//     console.log("You are good to go Master!!")

//     if(hasLicense){
//         console.log("Move out Mr")
//     }
//     else{
//         console.log("Mr You are good to go.....")
//     }


// }
// else{
//     console.log("Peety LIttle baby !! get OUt")
// }


// let age = 60;

// if(age >= 100){
//     console.log("Master Po")
// }
// else if(age > 50){
//     console.log("Your are a martial Artist")
// }
// else{
//     console.log("You are Young have Fun and enjoy")
// }

const agex = document.getElementById("text");
const btn = document.getElementById("mySubmit"); // Fixed: ID now matches HTML
const result = document.getElementById("result");
let age;

btn.onclick = () => { // Fixed: must be lowercase 'onclick'
    age = agex.value;
    age = Number(age);

    if (age >= 18) { // Fixed: Changed > to >= so 18-year-olds can vote
      result.textContent = "You Can vote...";
    }
    else if (age <= 0) {
      result.textContent = "You are Baby";
    }
    else {
       result.textContent = "You can't Vote";
    }
};