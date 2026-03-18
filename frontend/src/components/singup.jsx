import React from "react";
import { Link } from "react-router-dom";
import "./singup.css";
const Login = () => {
  return (
    <div className="login">
      <h1 className="nombre">LogIn</h1>

      <h2 className="nombre-login">Correo</h2>

      <input className="login-input" type="email" />

      <h2 className="nombre-login">Contraseña</h2>

      <input className="login-input" type="password" />

     

     <div className="btn-container">
  <Link to="/signup" className="SignUp-btn">
    Sign Up
  </Link>
  <Link to="/aceptar" className="aceptar-btn">
    Aceptar
  </Link>
</div>

     
        <Link to="/Olvide_contraseña" className="Olvide_contraseña-btn">
   Olvidé mi contraseña
        </Link>
      
    </div>
  );
};

export default Login;