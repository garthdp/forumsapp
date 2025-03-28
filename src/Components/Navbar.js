import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="navitem">Forums App</h1>
      </Link>
      <Link to="/Reports">
        <h2 className="navitem">Reports</h2>
      </Link>
      <Link to="/Updates">
        <h2 className="navitem">Updates</h2>
      </Link>
    </div>
  );
}

export default Navbar;
