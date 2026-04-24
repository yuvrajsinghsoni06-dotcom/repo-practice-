import Header from './header.jsx';
import './index.css'; // This links your styles to the app
import Food from './food.jsx';
import Card from './card.jsx';
import Button from './button.jsx';
import Student from './student.jsx';
import UserGreeting from './UserGreeting.jsx';
// import List from './list.jsx';
// import Practice from './practice.jsx';
import Sample from './sample.jsx';
import Contact from './contact.jsx';
import {Route , Routes} from "react-rounter-dom"

function App() {
  const fruits = [
        { id: 1, name: "apple", calorie: 95 },
        { id: 2, name: "orange", calorie: 45 },
        { id: 3, name: "banana", calorie: 105 },
        { id: 4, name: "coconut", calorie: 159 },
        { id: 5, name: "pineapple", calorie: 37 }
    ];

    const vegetables = [
      { id : 1, name: "Carrot", calorie: 41},
      { id : 2, name: "potato", calorie: 77},
      { id : 3, name: "spinach", calorie: 23},
      { id : 4, name: "beans", calorie: 31},
      { id : 5, name: "broccoli", calorie: 53},

    ];
  return(
    <>
    {/* <UserGreeting isLoggedIn ={true} />  */}
    {/* {fruits.length > 0 && <List items={fruits} category="fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>} */}
    {/* <Practice /> */}
    <Routes>
      <Route path='/' element=(<><HomePage/><Sample/></>)
    </Routes>
    <Sample/>
    <Contact/>

    </>
  );
}

export default App;