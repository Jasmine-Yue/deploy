import { useId } from "react";
import Button from "./Button";
import "./LoginForm.css";
import { useState } from "react";

function LoginForm({refName,onLogin}) {
  const [username, setUsername]=useState("");

  const id = useId();
  
  const  nameValidationCheck =(name) =>{  
      let valid = true;
      let errorMessage= "";  
      if (!name.trim()) {
        valid=false;
        errorMessage = "Name field is required";
      }
      //check if name all digits
      if (valid &&  /^\d+$/.test(name.trim()) ) {

        valid=false;
        errorMessage = "Name can not be all digits";
      }
      return {valid,errorMessage};
    }

    let {valid:isFormValid,errorMessage}=nameValidationCheck(username);

  
    const handleSubmit=(e) => {
            e.preventDefault();
            nameValidationCheck(username);
            if (isFormValid) {
             // console.log('form valid, is about to submit');
              onLogin(username);
              refName.current.close();
            }
          }
          
  return (
    <div className="login-form">
      <h2 className="title">Sign In</h2>
      <form className="form" onSubmit={handleSubmit }>
        <div className="form__detail form__required">
          <label htmlFor={`${id}-name`}>Name</label>
          <input id={`${id}-name`} 
           value={username}
           onChange={(e)=>{setUsername(e.target.value) } //  
           }>            
           </input>
        </div>
        <div className="form__detail form__optional">
          <label htmlFor={`${id}-email`}>Email</label>
          <input id={`${id}-email`} ></input>
        </div>
        {!isFormValid && <p className="error">{errorMessage}</p>}
        <div className="form__button">
          <Button type="submit" disabled={!isFormValid}
            onClick={()=>{ console.log('form login,username',username)
             onLogin(username)}}>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
