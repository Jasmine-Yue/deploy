import Button from './Button';
import './ThemeSwitch.css';


/* for theme, add app class and show responding class of i element according to state isLight */

function ThemeSwitch ({isLight=true, setTheme}){

    const themeClass= isLight?'gg-sun':'gg-moon';

    const oppositeName= isLight? 'light':'dark';

    return (<Button className="btn-theme" visual='link'>Switch
         <i className={`btn__icon ${themeClass}`}  onClick={ ()=>setTheme(!isLight)} ></i>
       </Button>);
      
}

export default ThemeSwitch;