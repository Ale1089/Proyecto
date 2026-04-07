import "./Register.css";

function Register() {

  return (
    <div>
      <h1 className="SingUp">Sing Up</h1>

      <form className="Campos-form"> 

        <label htmlFor="Nombre">Nombre completo</label>
        <input className="Campos" id="Nombre" type="text" />

        <label htmlFor="Correo">Correo</label>
        <input className="Campos" id="Correo" type="email" />

        <label htmlFor="Constraseña">Contraseña</label>
        <input className="Contraseña" id="Contraseña" type="password" />

        
        </form>     
    </div>
  );
}

export default Register;