import { Link } from "react-router-dom";
function Navbar(){


    return(
        <nav className="navbar">
      <h2 className="logo">MovieRec</h2>

      <ul className="nav-links">
        <Link to="/" className="nav-link">Home </Link>
        <Link to="/about" className="nav-link">About </Link>
      </ul>
    </nav>
    );
}

export default Navbar;