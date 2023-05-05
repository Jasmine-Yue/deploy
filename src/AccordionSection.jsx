import { useState } from "react";

import './AccordionSection.css';


function AccordionSection({title, children}){
  const [isOpen, setIsOpen]=useState(false);
  const handleClick=()=>{ setIsOpen(!isOpen)};  
  const className= isOpen? 'accordion__button--open':'';

  return (
    <> 
       <button className={`accordion__button ${className}`}
         onClick={handleClick}
         aria-expanded= {isOpen? 'true':'false'}
       >
         <h3>{title}</h3>
       </button>
      { isOpen && (<div className="accordion__detail">        
         { children}
       </div>)
      }
    </>
  )
}

export default AccordionSection;