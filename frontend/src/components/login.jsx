import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>

      <h2>Correo</h2>
      <input className="login-input" type="email" />

      <h2>Contraseña</h2>
      <input className="login-input" type="password" />

      <input className="login-input" type="submit" value="Aceptar" />

      <li>
        <Link to="/signup" className="SignUp-btn">
          Sign Up
        </Link>
      </li>

      <li>
        <Link to="/Olvide_contraseña" className="Olvide_contraseña-btn">
   Olvidé mi Olvide_contraseña
        </Link>
      </li>
    </div>
  );
};

export default Login;