
import { useContext } from "react"
import Authorize from "../../Store/authContext"
import classes from "./NavBar.module.css"

const NavBar = () => {

    const ctx = useContext(Authorize)

    return (
        <nav className={classes.navbar}>
            <ul>
                {ctx.isLoging && (<li>
                    <a href="/">Users</a>
                </li>)}

                {ctx.isLoging && (<li>
                    <a href="/">Admin</a>
                </li>)}

                {ctx.isLoging && (<li>
                    <button onClick={ctx.onLogout}>Logout</button>
                </li>)}
            </ul>
        </nav>
    )
}


export default NavBar