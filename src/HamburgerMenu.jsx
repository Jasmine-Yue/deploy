import DropdownMenu from "./DropdownMenu";
import {menu} from "./menu.js";
import { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu({ setPage, className }) {
  const [menuShow, setMenuShow] = useState(false);

  const classNameButton = menuShow ? "global-nav__button--open" : "";

  return (
    <nav className={`global-nav ${className}`}>
      <button
        className={`global-nav__button ${classNameButton}`}
        onClick={() => {
          setMenuShow(!menuShow);
        }}
         aria-expanded= {menuShow? 'true':'false'}
      >
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </button>
      <DropdownMenu
        className="global-nav__list"
        menu={menu}
        goPage={setPage}
      ></DropdownMenu>
    </nav>
  );
}

export default HamburgerMenu;
