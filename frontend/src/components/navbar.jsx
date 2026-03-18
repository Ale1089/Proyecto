import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
return (
<nav className="navbar">

<ul className="navbar-links">
<li><a href="#inicio">Inicio</a></li>
<li><a href="#servicio">Tareas</a></li>
<li><a href="#portafolio">Empleados</a></li>
<li><a href="#contacto">Inventario</a></li>
<li>
     <Link to="/login" className="login-btn">
      Login
    </Link>
</li>
</ul>
</nav>
);
};
export default Navbar;