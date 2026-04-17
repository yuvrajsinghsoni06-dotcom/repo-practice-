import Header from './header.jsx';
import './index.css'; // This links your styles to the app
import Food from './food.jsx';
import Card from './card.jsx';
import Button from './button.jsx';
import Student from './student.jsx';
function App() {
  return (
    <>
    <Student name="Yuvraj_singh_Soni"  age={34} isrich={true} />
    <Student name="UV"  age={30} isrich={true} />
    <Student name="Kush"  age={34} isrich={true} />
    <Student name="karodimaal"  age={32} isrich={true} />
    <Student name="Rajesh soni"  age={60} isrich={true} />
    <Student />
    </>
  );
}

export default App;