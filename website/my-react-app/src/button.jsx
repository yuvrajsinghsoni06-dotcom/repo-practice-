// import styles from './button.module.css'

function Button(){

    const styles ={
       backgroundColor:"rgb(147, 147, 210)",
       color:"white",
       padding: "10px 20px",
       border:"none",
       cursor: "pointer",
       borderRadius:"5px"
}
    
    return(<button style={styles}>Handsome</button>);
}

export default Button;