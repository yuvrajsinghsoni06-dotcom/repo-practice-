import React , {useState} from 'react'

function Mycomponent() {

    const [car , setCar] = useState({year : 2025 , 
                                    make : "Ford" , 
                                    model : "Mustang"
    });

    function handleYearChange(e){
        setCar(c => ({...c,year: e.target.value}));
    }
    function handleMakeChange(e){
        setCar(c => ({...c,make: e.target.value}));
    }
    function handleModelChange(e){
        setCar(c => ({...c,model: e.target.value}))
    }
  return (
    <div>
        <p className="box-1">Your Favourite car is : {car.year} {car.make} {car.model}</p>

        <input className="btn1" type="number" value={car.year} onChange={handleYearChange}></input><br></br>
        <input className="btn2" type="Name" value={car.make} onChange={handleMakeChange}></input><br></br>
        <input className="btn4" type="Model" value={car.model} onChange={handleModelChange}></input><br></br>
    </div>
  )
}

export default Mycomponent