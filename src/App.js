import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom"
import Home from './Components/Home/Home';
import Logins from './Components/Login/Logins';
import MainNavBar from './Components/MainNavBar/MainNavBar';
import Authorize from './Store/authContext';


function App(props) {

  const [isLoging, setIsLogin] = useState(false)

  useEffect(() => {
    let storedLoginData = localStorage.getItem("isLogin")
    if (storedLoginData) {
      setIsLogin(true)
    }
  },[])

  const loginHandler = () => {
    localStorage.setItem("isLogin", "1")
    setIsLogin(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLogin")
    setIsLogin(false)
  }

  const MainHeaderPage = () => {
    return (<MainNavBar/>)
  }

  const LoginPage = () => {
    return <Logins onLogin={loginHandler} />
  }


  return (
    <Authorize.Provider
     value={{
      isLoging: isLoging, 
      onLogout: logoutHandler}}>
      {ReactDOM.createPortal(<MainHeaderPage />, document.getElementById("mainNavbar"))}

      {!isLoging && ReactDOM.createPortal(<LoginPage onLogin={props.onLogin} />, document.getElementById("loginId"))}
      {isLoging && <Home onLogout= {logoutHandler} />}
    </Authorize.Provider>
  );
}

export default App;
