// 1. Fixed the spelling and method names
const decrease_btn = document.getElementById("d-btn"); // Ensure ID matches your HTML
const reset_btn = document.getElementById("reset-btn");
const increase_btn = document.getElementById("i-btn"); // Removed the '#'

// 2. Fixed 'document' casing and used querySelector for the class
const countLabel = document.querySelector(".Counter");

let count = 0;

// 3. Logic remains the same, just using the corrected variables
increase_btn.onclick = () => {
    count++;
    countLabel.textContent = count;
};

reset_btn.onclick = () => {
    count = 0;
    countLabel.textContent = count;
};

decrease_btn.onclick = () => {
    count--;
    countLabel.textContent = count;
};