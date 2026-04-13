// import styles from './button.module.css'
import styled from '@emotion/styled'
const StyleButton =styled.button`
   color: turquoise;
   background-color: black;
   padding: 10px 20px;
   border-radius: 4px;
  
   &:hover {
    color: hotpink;
  }
`
function Button(){

    // const styles ={
    //    backgroundColor:"rgb(147, 147, 210)",
    //    color:"white",
    //    padding: "10px 20px",
    //    border:"none",
    //    cursor: "pointer",
    //    borderRadius:"5px"
// }
    
    return(<StyleButton>Handsome</StyleButton>);
}

export default Button;