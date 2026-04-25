import React ,{useState} from "react";

function Mycomponent(){

    const [name, setName] = useState("UV");
    const [age , setage] = useState(22);
    const [isEmployeed , setisEmployeed] = useState(true);

    const UpdateName = () =>{
        setName("Yuvraj singh soni")
    }
    const incrementage = () =>{
        setage(age + 1)
    }
    const decrementeage = () =>{
        setage(age - 1)
    }

    const toggleEmplyeed = () =>{
        setisEmployeed(!isEmployeed)
    }


    return(
        <div className="box-1">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Employeed-Status: {isEmployeed ? "Employeed": "Unemployeed"}</p>
            <button className="btn1" onClick={UpdateName}>Update Name</button>
            <button className="btn2" onClick={incrementage}>Increase Age</button>
            <button className="btn2" onClick={decrementeage}>Decrease Age</button>
            <button className="btn4" onClick={toggleEmplyeed}>Toggle Employeed Status</button>
        </div>
    
    );
}

export default Mycomponent;