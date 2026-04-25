import React , {useState} from "react";

function Counter(){
    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };
    const decrement = () =>{
        setCount(count - 1);
    };
    const Reset = () =>{
         setCount(0);
    };
    return(
        <div className="box-1">
            <h1  className="btn2">Counter: {count}</h1>
            <button className="btn1" onClick={(increment)}>Increment</button>
            <button className="btn2" onClick={(decrement)}>Decrement</button>
            <button className="btn2" onClick={(Reset)}>Reset</button>
        </div>
    );

}

export default Counter;