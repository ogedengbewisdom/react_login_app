import React, { Fragment, useContext } from 'react';
import ReactDOM from "react-dom"
import Home from './Components/Home/Home';
import Logins from './Components/Login/Logins';
import MainNavBar from './Components/MainNavBar/MainNavBar';
import Authorize from './Store/authContext';



function App(props) {


  const MainHeaderPage = () => {
    return (<MainNavBar/>)
  }

  const LoginPage = () => {
    return <Logins />
  }

  const ctx = useContext(Authorize)


  return (
    <Fragment>
      {ReactDOM.createPortal(<MainHeaderPage />, document.getElementById("mainNavbar"))}

      {!ctx.isLoging && ReactDOM.createPortal(<LoginPage />, document.getElementById("loginId"))}
      {ctx.isLoging && <Home />}
    </Fragment>
  );
}

export default App;
