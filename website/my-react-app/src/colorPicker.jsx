
import React , {useState} from "react";

function ColorPicker(){

    const [color , setColor] = useState("#f9f9f9");

    function handleColorChange(e){
        setColor(e.target.value);
    }



    return(
        <div className="box-1">
            <h1>Color Picker</h1> 
                       <div className="color-display"
                 style={{backgroundColor:  color}}>
                    <p> Selected- Color  : {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}

export default ColorPicker;