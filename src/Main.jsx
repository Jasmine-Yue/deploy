import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Work from "./Work";
import {title} from './menu.js'

function Main({ className, page, children }) {

 
 const pageTitle= title[page]? title[page]:title[Home];

  return (
    <main  id="main-section" className={`main ${className}`} >
      <h1 className="main__title">{pageTitle}</h1>
      {page === "Home" && <Home></Home>}
      {page === "Projects" && <Projects></Projects>}
      {page === "Work" && <Work></Work>}
      {page === "Contact" && <Contact></Contact>}

      {children}
    </main>
  );
}

export default Main;
