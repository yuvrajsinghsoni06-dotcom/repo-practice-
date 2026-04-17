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

function Button(){
    return(<><button className={styles.btn}>Handsome</button>
        <button className={`bg-red-500 text-white w-20 h-8`}>hello</button>
        </>);
}

export default Button;

// const btnstyle = css`
// background-color: rgb(147, 147, 210);
// color: white;
// padding: 10px 30px;
// border: none;
// `;