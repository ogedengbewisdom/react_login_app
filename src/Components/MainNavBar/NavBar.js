
import classes from "./NavBar.module.css"

const NavBar = (props) => {

    return (
        <nav className={classes.navbar}>
            <ul>
                {props.isLoging && (<li>
                    <a href="/">Users</a>
                </li>)}

                {props.isLoging && (<li>
                    <a href="/">Admin</a>
                </li>)}

                {props.isLoging && (<li>
                    <button type="button" onClick={props.onLogout}>Logout</button>
                </li>)}
            </ul>
        </nav>
    )
}


export default NavBar