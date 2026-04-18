import propTypes from 'prop-types';

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Financial_Status: {props.isrich ? 'Rich' : 'Not Rich'}</p>

        </div>
    )
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isrich: propTypes.bool,

}
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isrich: false,
}
export default Student;