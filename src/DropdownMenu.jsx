import { useState } from "react";
import "./DropdownMenu.css";
import Button from "./Button";

function DropdownMenu({ menu, goPage,className }) {   
  // button or a
  const [openItems, setOpenItems] = useState({});

  const getPageFromPath=(path)=>path.charAt(0).toUpperCase()+path.slice(1,-5);

  const topmenu = menu.map((topitem, index) => {

    const submenu =
      topitem.submenu && 
      topitem.submenu.map((subitem) => (
        <li key={subitem.label} className="submenu__item">
          <a className="submenu__link"  href={subitem.path}
            onClick={(e) => {
              e.preventDefault();
              goPage(getPageFromPath(subitem.path)); 
              setOpenItems({ ...openItems, [topitem.label]: !openItems[topitem.label],
              });
            }}
          > {subitem.label}
          </a>
        </li>
      ));

    const classNameMulchild = topitem.submenu ? "menu__item--mulchild" : "";
    const classNameOpen =  topitem.submenu && openItems[topitem.label] ? "menu__item--open" : "";

    return (
      <li
        key={topitem.label}
        className={`menu__item ${classNameMulchild} ${classNameOpen}`}
      >
        {!topitem.submenu && (
          <a  className="menu__link"  href={topitem.path}
              onClick={(e) => {
              e.preventDefault();//1.if link, go page 2. if has submenu, setOpenItems              
              if (!topitem.submenu) //if submenu not exist               
                goPage(getPageFromPath(topitem.path)); 
              else
                setOpenItems({...openItems,  [topitem.label]: !openItems[topitem.label]});
            }}
          >
            {topitem.label}
          </a>
        )}
        {topitem.submenu && (
          <Button visual="link"
            onClick={(e) => { setOpenItems({ ...openItems,  [topitem.label]: !openItems[topitem.label]});  }}>
            {topitem.label}
          </Button>
        )}
        {topitem.submenu && <ul className="submenu__list">{submenu}</ul>}
      </li>
    );
  });

  return <ul className={`menu__list ${className}` }>{topmenu}</ul>;
}

export default DropdownMenu;
