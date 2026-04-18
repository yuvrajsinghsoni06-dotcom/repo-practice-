import Header from './header.jsx';
import './index.css'; // This links your styles to the app
import Food from './food.jsx';
import Card from './card.jsx';
import Button from './button.jsx';
import Student from './student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './list.jsx';
function App() {
  const fruits = [
        { id: 1, name: "apple", calorie: 95 },
        { id: 2, name: "orange", calorie: 45 },
        { id: 3, name: "banana", calorie: 105 },
        { id: 4, name: "coconut", calorie: 159 },
        { id: 5, name: "pineapple", calorie: 37 }
    ];
  return (
    <>
    {/* <UserGreeting isLoggedIn ={true} /> */}
    <List items={fruits} category="fruits"/>

    </>
  );
}

export default App;