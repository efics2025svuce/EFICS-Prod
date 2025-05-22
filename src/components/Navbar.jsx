import {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import logo from "../assets/logo.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <img className="logo" src={logo} />
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`links ${isOpen ? "active" : ""}`}>
        <Link to="/Home">Home</Link>
        <Link to="/ConferenceTheme">Conference Theme</Link>
        <Link to="/Calls">Call for Papers</Link>
        <Link to="/Schedule">Schedule</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdxnTDfqfDulHw6v50glAQWsIc3pq0XU63FOuto-1XqNw4irQ/viewform" target="#">Register Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;