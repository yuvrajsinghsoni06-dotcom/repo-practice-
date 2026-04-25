// import { css } from '@emotion/react';
// import styled from '@emotion/styled'
// import styles from './button.css'

// const StyleButton = styled.button`
//    color: turquoise;
//    background-color: black;
//    padding: 10px 20px;
//    border-radius: 4px;
  
//    &:hover {
//     color: hotpink;
//    }
// `;

function Button() {
    const handlecheck = (e) => e.target.style.display = "none ";
    const imgurl = "./src/assets/img.jpeg";

    // const handlecheck2 = (name) =>{console.log(`${name} stop clicking the btn`)};
    return(
        <img onClick={(e) =>handlecheck(e)} src={imgurl}></img>
    );
}

export default Button;

// const btnstyle = css`
// background-color: rgb(147, 147, 210);
// color: white;
// padding: 10px 30px;
// border: none;
// `;