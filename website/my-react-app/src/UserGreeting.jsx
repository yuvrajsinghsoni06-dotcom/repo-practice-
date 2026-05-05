import PropTypes from "prop-types";

function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Pls Log in to Continue</h2>
    // }
    const welcomemessage = <h2 className="welcome_mess">welcome {props.username}</h2>

    const loginfailed = <h2 className="login_failed">pls Login in to continue</h2>

    return props.isLoggedIn ? welcomemessage : loginfailed
}
UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}
UserGreeting.defaultProps = {
    username : "Yuvraj",
    isLoggedIn : false,
}
export default UserGreeting;