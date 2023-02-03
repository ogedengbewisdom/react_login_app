import { useContext } from "react"
import Authorize from "../../Store/authContext"
import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./Home.module.css"


const Home = (props) => {

    const ctx = useContext(Authorize)
    return (
        <Card className={classes.home}>
            <div>
                <h1>Welcome To SHoMooRe!</h1>
                <div className={classes.buton}>
                    <Button onClick={ctx.onLogout}>Logout</Button>
                </div>
            </div>
        </Card>
    )
}

export default Home