import { useContext } from 'react';
import UserContext from  './UserContext';
import Button from './Button';

function  Feedback({name}){



  const {username,setPage}=useContext(UserContext);

    return (
    <div className='feedback'>
        <h2>Dear {name}, thank you for Contacting Me!</h2>
        <p>Your Message Have Been Recieved!
             I will contact you Soon!
        </p>
        <Button onClick={()=>setPage('Home')}>Back To Home</Button>
    </div>
    );
}

export  default Feedback;