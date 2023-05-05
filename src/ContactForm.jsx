import { useId, useState } from "react";
import Button from "./Button";
import  './ContactForm.css';

function ContactForm({  onSubmit }) {
    
  const InitialFormData={name:"",email:"",phone:"",message:""};
  const [formData,setFormData]=useState(InitialFormData); 


   let {isFormValid,errorMessage}=validationCheck();

   function validationCheck() {  
      let isFormValid = true;
      let errorMessage= "";  
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        isFormValid=false;
        errorMessage = "* Field is required";
      }

      //check if email has @
      if (isFormValid && !formData.email.trim().includes("@")) {
        isFormValid=false;
        errorMessage = "This field be a valid email address including a @";
      }
      return {isFormValid,errorMessage};
    }



  const id = useId();
  
  const handleSubmit = () => {
    if (isFormValid)
     onSubmit(formData.name);
  }; //test
  

  return (
      <form className="contact__form" onSubmit={(e)=>{e.preventDefault();handleSubmit();}}>
        <div className="form__detail form__required">
          <label htmlFor={`${id}-name`}>Name</label>
          <input
            id={`${id}-name`}
            value={formData.name}
            onChange={
              (e) => {  setFormData({...formData,name:e.target.value});     } //
            }
          ></input>
        </div>
        <div className="form__detail form__required">
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            id={`${id}-email`}
            value={formData.email}
            onChange={
              (e) => {    setFormData({...formData,email:e.target.value});   } //
            }
          ></input>
        </div>
        <div className="form__detail form__required">
          <label htmlFor={`${id}-message`}>Message</label>
          <textarea
            id={`${id}-message`}
            value={formData.message}
            onChange={(e) => setFormData({...formData,message:e.target.value})   }
          ></textarea>
        </div>
        {!isFormValid && <p className="error">{errorMessage}</p>}
        <div className="form__button">
          <Button type="submit" disabled={!isFormValid} 
          onClick= {handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
  );
}
export default ContactForm;
