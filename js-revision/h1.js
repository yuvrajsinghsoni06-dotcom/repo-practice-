// // 1. Sare elements ko grab kiya
// const ckbox = document.getElementById("subbtn");
// const l1 = document.getElementById("L1");
// const l2 = document.getElementById("L2");
// const l3 = document.getElementById("L3");
// const p1 = document.getElementById("paraforsub");
// const p2 = document.getElementById("paraforlesson");

// // Note: Yahan pehle 'p1' dobara declare tha, usse hata diya hai.
// const submit = document.getElementById("mysubmit"); 

// // 2. Button click hone par logic chalega
// submit.onclick = function() {
    
//     // Checkbox Logic: Character Building
//     if (ckbox.checked) {
//         p1.textContent = "YOU Are Ready For The Change";
//     } else {
//         p1.textContent = "Are You Sure You Don't Want to Build a Strong Character?";
//     }

//     // Radio Logic: Stoic Lessons (Spelling errors fixed for better impact)
//     if (l1.checked) {
//         p2.textContent = "Always be thankful to Nature and content with the present, because we only have this present moment to lose. The past is gone and the future is not ours yet.";
//     } 
//     else if (l2.checked) {
//         p2.textContent = "Action without purpose, willingness, or common interest is against nature and the universe. Such a person never succeeds in gaining peace, tranquility, or happiness.";
//     } 
//     else if (l3.checked) {
//         p2.textContent = "Elevate your perspective on Good and Evil. Don't be overcome by pain or pleasure. Treat every action as if it were your last—with dignity, acceptance, and without hatred.";
//     } 
//     else {
//         p2.textContent = "Select an option to learn the lesson.";
//     }
// };



// const fullname = "Yuvraj Singh"
// let firstName = fullname.slice(0, fullname.indexOf(" "))
// let lastName = fullname.slice(fullname.indexOf(" "))

// console.log(firstName)
// console.log(lastName)

let username = window.prompt("Enter your Username : ")

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachar = username.slice(1);
// extrachar = extrachar.toLowerCase();
// username = letter + extrachar;



username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

console.log(username);

