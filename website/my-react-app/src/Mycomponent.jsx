import React, { useState } from 'react';

function MyComponent() {
    const [food, setFood] = useState(["Apple", "Banana", "Watermelon"]);

    function handleAddFood() {
        const foodInput = document.getElementById("foodinput");
        const newFood = foodInput.value;
        
        if (newFood.trim() !== "") {
            // Correct way: Call the function, don't assign to it
            setFood(f => [...f, newFood]);
            foodInput.value = "";
        }
    }

    function handleRemoveFood(index) {
        // Filter creates a new array excluding the item at the clicked index
        setFood(food.filter((_, i) => i !== index));
    }

    return (
        <div className='box-1'>
            <h2>List of Food</h2>
            <ul className="parent">
                {food.map((item, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {item}
                    </li>
                ))}
            </ul>
            
            <input type="text" id="foodinput" placeholder="Enter your Food" />
            <button onClick={handleAddFood}>Add Food</button>
            <p><i>(Tip: Click an item to remove it)</i></p>
        </div>
    );
}

export default MyComponent;