import { useState,useContext } from "react";
import ContactForm from "./ContactForm";
import Feedback from "./Feedback";
import './Contact.css';


function Contact(){
    const [messageRecieved,setMessageRecieved]=useState(false);
 
    const [name, setName] = useState("");

    const onSubmit= (name)=>{setMessageRecieved(true);setName(name);}   

    return (
        <div className="main__content">
            { !messageRecieved && <ContactForm onSubmit={onSubmit}></ContactForm>}
            { messageRecieved && <Feedback name={name}></Feedback>}
        </div>
       
/*     <dialog className="dialog" >
      <ContactForm ></ContactForm>
    </dialog> */
    );
}
export default Contact;