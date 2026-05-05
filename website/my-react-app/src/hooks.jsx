import React, { useEffect, useState } from 'react';

function Hooks() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight); // Standardized to lowercase 'height'

    useEffect(() => {
        // 1. Define the handler inside or outside, but call it here
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        // 2. Cleanup function: This is CRITICAL. 
        // It removes the old listener before the component unmounts or re-renders.
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        };
    }, []); // 3. Empty dependency array ensures this only runs ONCE on mount

    function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return (
        <div>
            <p>Window Height: {height}px</p>
            <p>Window Width: {width}px</p>
        </div>
    );
}

export default Hooks;