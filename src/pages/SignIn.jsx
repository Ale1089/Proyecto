import { useNavigate } from 'react-router-dom';
import "../pages/SignUp.css";
import ilustracion from "../assets/ilustracion-SignIn.svg";

function SignIn() {

  const navigate = useNavigate();

 const VolverSignUp = (e) => {
  e.preventDefault();
  navigate('/'); 
};

 const AceptarPagPrin = (e) => {
  e.preventDefault();
  navigate('/PagPrincipal')
 }
  return (
    <div className="container-split">
      
      <div className="left-side">

        <h3 className="Texto-Welcome">Welcome back!</h3>

        <p className="Texto-SignUp">Sign in and continue optimizing your company’s management in one place.</p>

        <img src={ilustracion} alt="imagen para iniciar sesión" />

      </div>
      
      
      <div className="right-side">
        
       <div className="form-SignUp">

        <h2 className="tittle-form">Sign In</h2>
      
      <form className="Campos-form" >

        <input className="Campos" placeholder="Email" type="email" />

        <input className="Campos" placeholder="Password" type="password" />
        
        <div className="botones-container">

          <button className="btn-SignIn" type="submit" onSubmit={AceptarPagPrin}>Submit</button>

          <button className="btn-SignUp" type="button" onClick={VolverSignUp}>SignUp</button>

          

        </div>
        <p className='Olvide-Contraseña'><a href="">Olvidé mi contraseña</a></p>
        
      </form>
    
    </div>

  </div>
</div>
  );
}

export default SignIn;