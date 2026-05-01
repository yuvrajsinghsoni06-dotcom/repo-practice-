
import React , {onState} from "react";

function ColorPicker(){

    const [color , setColor] = onState("red");

    function handleColorChange(e){
        setColor(e.target.value);
    }



    return(
        <div className="box-1">
            <h1>Color Picker</h1> 
                       <div className="color-display"
                 style={{backgroundColor:  color}}>
                    <p> Sdelected- Color  : {color}</p>
            </div>
            <label>Select a Color:</label>
            <input types="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}

export default ColorPicker;