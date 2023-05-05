import { useContext, createContext, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import LoginDemo from "./LoginDemo";
import ThemeSWitch from "./ThemeSwitch";
import UserContext from "./UserContext";

/*   <Accordion data={data}></Accordion>  */
/*    <Carousel images={images} className={}></Carousel> */
/*    <LoginDemo></LoginDemo> */
/*     <DropdownMenuDemo setPage={setPage}></DropdownMenuDemo> */
/*   const theme=
   <i className={themeClass}  onClick={ ()=>setIsLightTheme(!isLightTheme)} ></i> */

function App() {
  /*to many state, could consider using object as state variable */
  const [page, setPage] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("emilia");
  const onLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  const [isLightTheme, setIsLightTheme] = useState(true);
  const appThemeClass = isLightTheme ? "app--light" : "app--dark";

  const themeSwitch = (
    <ThemeSWitch isLight={isLightTheme} setTheme={setIsLightTheme} />
  );
  const userPanel = (
    <LoginDemo
      isLoggedIn={isLoggedIn}
      username={username}
      onLogin={onLogin}
      className="other__login"
    ></LoginDemo>
  );
  const headerOther = (
    <div className="header__other">
      {themeSwitch}
      {userPanel}
    </div>
  );

  return (
    <UserContext.Provider value={{username,setPage}}>
      <div className={`app ${appThemeClass}`}>
        <Header setPage={setPage} className="header">
          {headerOther}
        </Header>
        <Main className="main" page={page}></Main>
        <Footer className="footer"></Footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
