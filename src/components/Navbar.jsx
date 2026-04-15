import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
        <h3 className="logo">PORTFOLIO</h3>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;