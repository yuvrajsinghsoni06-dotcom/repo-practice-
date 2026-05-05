
import Student from "./student.jsx"

function App() {



  return(<>
  <Student name = " yuvraj" age = {20} IsStudent = {true} />
  <Student name = " yogi" age = {50} IsStudent = {false} />
  <Student name = " Modi" age = {74} IsStudent = {false} />
  <Student/>
  </>
  );
}

export default App;