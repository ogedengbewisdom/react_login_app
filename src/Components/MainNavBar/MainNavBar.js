import NavBar from "./NavBar"
import classes from "./MainNavBar.module.css"



const MainNavBar = (props) => {


    return (
        <div className={classes.head}>
            <h1>ShoPhit</h1>
            <NavBar isLoging={props.isAuthenticated} onLogout={props.onLogout}/>
        </div>
    )
}

export default MainNavBar