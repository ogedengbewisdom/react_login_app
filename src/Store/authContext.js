import React from "react";

const Authorize = React.createContext({
    isLoging: false,
    onLogout: () => {},
    onLogin: () => {}
})

export default Authorize