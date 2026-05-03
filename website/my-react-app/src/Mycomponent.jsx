import React, { useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState(""); // Fixed typo here

    function handleAddCar() {
        // Only add if fields aren't empty
        if (carMake.trim() === "" || carModel.trim() === "") return;

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        // Use functional update to ensure we have the latest state
        setCars(c => [...c, newCar]);

        // Reset fields after adding
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        // Filter out the car at the specific index
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value); // Fixed: was setCars
    }

    function handleModelChange(e) {
        setCarModel(e.target.value); // Fixed: was setCars
    }

    return (
        <div className="box-1">
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)} style={{ cursor: 'pointer' }}>
                        {car.year} {car.make} {car.model} (Click to remove)
                    </li>
                ))}
            </ul>

            <label>Car Year: </label>
            <input type="number" value={carYear} onChange={handleYearChange} />
            <br />

            <label>Car Maker: </label>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" />
            <br />

            <label>Car Model: </label>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" />
            <br />

            <button className="btn4" onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent;