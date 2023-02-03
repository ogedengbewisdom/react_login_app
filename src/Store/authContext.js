import React, { useEffect, useState } from "react";

const Authorize = React.createContext({
    isLoging: false,
    onLogout: () => {},
    onLogin: () => {}
})

export const AuthorizeProvider = (props) => {
    const [isLoging, setIsLogin] = useState(false)

    useEffect( ()=> {
        const storedLoginData = localStorage.getItem("isLogged")
        if (storedLoginData) {
            setIsLogin(true)
        }
    },[])
    
    const loginHandler = () => {
        localStorage.setItem("isLogged", "1")
        setIsLogin(true)
    }

    const logoutHandler = () => {
        localStorage.removeItem("isLogged")
        setIsLogin(false)
    }

    return (
        <Authorize.Provider
          value={{
            isLoging: isLoging,
            onLogin: loginHandler,
            onLogout: logoutHandler
          }}
        >
            {props.children}
        </Authorize.Provider>
    )
}

export default Authorize