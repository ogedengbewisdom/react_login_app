import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from "react-dom"
import Home from './Components/Home/Home';
import Logins from './Components/Login/Logins';
import MainNavBar from './Components/MainNavBar/MainNavBar';


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
    return (<MainNavBar isAuthenticated={isLoging} onLogout={logoutHandler}/>)
  }

  const LoginPage = () => {
    return <Logins onLogin={loginHandler} />
  }



  return (
    <Fragment>
      {ReactDOM.createPortal(<MainHeaderPage isAuthenticated={props.isAuthenticated} onLogout={props.onLogout} />, document.getElementById("mainNavbar"))}
      {/* {!isLoging && } */}
      {!isLoging && ReactDOM.createPortal(<LoginPage onLogin={props.onLogin} />, document.getElementById("loginId"))}
      {isLoging && <Home />}
    </Fragment>
  );
}

export default App;
