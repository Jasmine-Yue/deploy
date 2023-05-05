import './Button.css'

function Button({ className, disabled=false, type='button',visual='button', onClick,children}){
    className=className?? "";
    let buttonClass="button", handleClick=onClick;
    if (type==='submit'){
      buttonClass='button-submit'; 

      handleClick = (e)=>{   //for submit, need to preventDefault;
       e.preventDefault(); 
       onClick();
       }     
    }
       
    if (visual==='link')
      buttonClass='button-link';

    return (
      <button className={`${className} ${buttonClass}`} 
             disabled={disabled}
             onClick={ handleClick}>
                {children}
      </button>        
    );

}

export default Button;