import React, { useState } from 'react';

function TodoList() {
    // Initial state based on your disciplines
    const [tasks, setTasks] = useState(["Praying to Gods", "Mediation", "Classics", "Exercise"]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputBox(e) {
        setNewTasks(e.target.value);
    }

    function addTask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
            setNewTasks(""); // Clear the input
        }
    }

    function removeTask(index) {
        // filter creates a NEW array, which React needs to trigger a re-render
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function moveUpTask(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDownTask(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            
            <div className="input-group">
                <input 
                    type="text"
                    className="Task-box"
                    placeholder="Enter a task..."
                    value={newTasks}
                    onChange={handleInputBox} // MUST be camelCase
                />
                <button className="add-btn" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <div className="button-group">
                            <button className="del-btn" onClick={() => removeTask(index)}>
                                ❌
                            </button>
                            <button className="move-btn" onClick={() => moveUpTask(index)}>
                                👆
                            </button>
                            <button className="move-btn" onClick={() => moveDownTask(index)}>
                                👇
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;