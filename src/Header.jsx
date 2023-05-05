
import './Header.css'
import HamburgerMenu from './HamburgerMenu';

/*       <GlobalNav className="header__nav" ></GlobalNav> */

/*setPage is for HambrugerMu 里的dropdownMenu===>too deep drilling
could improve using useContext;
*/

function Header({className,setPage,children}){
    return (
        <header className={`header ${className}`}>          
            <img className="header__img"  src="http://placekitten.com/50/50" alt="logo of my website" />
            <a className='header__skip-link' href='#main-section'>skip to content</a>
            <HamburgerMenu setPage={setPage} className="header__nav"></HamburgerMenu>
           {children}
        </header>
    );
}

export default Header