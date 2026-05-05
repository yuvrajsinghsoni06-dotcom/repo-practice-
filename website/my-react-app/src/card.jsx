import Profilepic from './assets/ssa.png';

function Card(){
    return(
        <div className="card">
            <img src={Profilepic} alt="Profile picture"></img>
            <h2 className="card-title">YUVRAJ SINGH SONI</h2>
            <p className="card-description">Yuvraj is a disciplined and hardworking developer with passiante and asthensic charasmatic person</p>
        </div>
    )
}
export default Card;


// -------------------------------------->

// the following ways we can apply css in react 
// 1. inline css
// 2. internal css 
// 3. external css
// 4. modulas css