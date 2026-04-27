import React ,{useState} from "react";

function Mycomponent(){

    const [Name , setname] = useState("Guest");
    const [quantity , setquantity] = useState(0);
    const [comment , setComment] = useState(" I Realist");
    const [payment , setPayment] = useState("");
    const [shipped , setShipped] = useState("Delivery");


    function handleEvent(e){
        setname(e.target.value);
    }

    function handlequantity(e){
        setquantity(e.target.value);
    }

    function handlecomment(e){
        setComment(e.target.value);
    }

    function handlePayment(e){
        setPayment(e.target.value);
    }

    function handleShipping(e){
        setShipped(e.target.value);
    }
    return(
        <div className="box-1">
            <input className="btn4" value={Name} onChange={handleEvent}/>
            <p className="btn1"> Name : {Name}</p>
            <input className="btn4" value={quantity} onChange={handlequantity}/>
            <p className="btn2"> Quantity : {quantity}</p>
            <input className="btn4" value={comment} onChange={handlecomment}/>
            <p className="btn2"> Comment : {comment}</p>

            <select className="btn4" value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="credit">Credit Card </option>
                <option value="debit">Debit card</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <label>
                <input type="radio" name="shipping" value="Pick up" checked={shipped === "Pick Up"} onChange={handleShipping} />
                pick Up
            </label>
            <label>
                <input type="radio" name="shipping" value="Delivery" checked={shipped === "Delivery"} onChange={handleShipping} />
                Delivery
            </label>
            <p> Shipping : {shipped}</p>

        </div>
    );

}

export default Mycomponent;