

function Header(){

    return(
        <>
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
        <hr></hr>
        <button>click me</button>
        <footer>
            <p>&copy; {new Date().getFullYear()} my website. all right are reserved.</p></footer>
        </>
    );

}

export default Header