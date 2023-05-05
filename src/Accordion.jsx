import AccordionSection from "./AccordionSection";
import "./Accordion.css";


function Accordion({data, className} ){

 
   const content= data.map((item,index)=>
     <AccordionSection key={item.title}
     title={item.title}>{item.detail}
     </AccordionSection>);

    return (
        <div className={`accordion ${className}`} >
           {content}      
        </div>
    )

}

export default Accordion;