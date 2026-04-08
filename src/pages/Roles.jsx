import "./Roles.css";
import ilustracion from "../assets/ilustracion-SignUp.svg";

function SignUp() {
  return (
    <div className="container-split">
      <div className="left-side">
        <p className="Texto-Roles">
          
If you decide to register a new company, you will be able to set up inventory, customize the company profile, create tasks, and assign them.
        </p>
        <img src={ilustracion} alt="imagen para el registro" />
      </div>

      <div className="right-side">

        <div className="roles-container">

          <form className="form-roles">

            <p className="p-form-roles">Select the account type</p>
            
            <label>
              <input className="inputs-form" type="radio" name="user-type"  value="personal"  defaultChecked  />Member</label>

            <br />

            <label>
              <input className="inputs-form"  type="radio"   name="user-type" value="business" />Owner </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;