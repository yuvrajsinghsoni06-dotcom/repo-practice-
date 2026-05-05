import React, { useState, useEffect } from 'react';

function Hooks() {
  // 1. Corrected 'UseState' to lowercase 'useState'
  const [count, setCount] = useState(0);
  const [color , setColor] = useState("yellow");

  // 2. This runs after every render
  useEffect(() => {
    document.title = `Count : ${count} ${color}`;
  }, [count , color]);

  function addCount() {
    setCount(c => c + 1);
  }

  function diffCount() {
    setCount(c => c - 1);
  }

  function ChangeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }

  // 3. Ensure the return statement is inside the function body
  return (
    <div>
      <p style={{color : color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button><br/><br/>
      <button onClick={diffCount}>Decrease</button>
      <button onClick={ChangeColor}>Change Color</button>
    </div>
  );
}

export default Hooks;