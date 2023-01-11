import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <Link to='/' className="navbar__sign" id='signin'>Zaloguj się</Link>
                <Link to='/' className="navbar__sign" id="signup">Zarejestruj się</Link>
            </div>
            <div>
                <Link to='/' className="navbar__menu">Start</Link>
                <Link to='/' className="navbar__menu">O co chodzi?</Link>
                <Link to='/' className="navbar__menu">O nas</Link>
                <Link to='/' className="navbar__menu">Fundacja i organizacje</Link>
                <Link to='/' className="navbar__menu">kontakt</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;