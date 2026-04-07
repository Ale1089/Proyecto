import "./SignUp.css";
import ilustracion from "../assets/ilustracion-SignUp.svg";

function SignUp() {

  return (
    <div className="container-split">
      
      <div className="left-side">

        <h3 className="Texto-Welcome">Welcome!</h3>

        <p className="Texto-SignUp">Manage your inventory, organize your team, and take full control of your processes from one place.</p>

        <img src={ilustracion} alt="imagen para el registro" />

      </div>
      
      
      <div className="right-side">
        
       <div className="form-SignUp">

        <h2 className="tittle-form">Create Account</h2>
      
      <form className="Campos-form">

        <input className="Campos" placeholder="UserName" type="text" />

        <input className="Campos" placeholder="Email" type="email" />

        <input className="Campos" placeholder="Password" type="password" />
        
        <div className="botones-container">

          <button className="btn-SignUp" type="submit">Submit</button>

          <button className="btn-SignIn" type="submit">Sign In</button>

        </div>
        
      </form>
    
    </div>

  </div>
</div>
  );
}

export default SignUp;