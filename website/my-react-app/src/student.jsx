import React from 'react'
import PropTypes from 'prop-types';

function Student(props) {
  // 1. The function only handles the "recipe" for the UI
  return (
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.IsStudent ? "Yes" : "No"}</p>
    </div>
  );
} // <--- 2. IMPORTANT: The function MUST end here.

// 3. Static properties are assigned OUTSIDE the function
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    IsStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 30,
    IsStudent: false
};

export default Student;