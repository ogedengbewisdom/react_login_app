import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./Home.module.css"


const Home = (props) => {
    return (
        <Card className={classes.home}>
            <div>
                <h1>Welcome To SHoMooRe!</h1>
                <div className={classes.buton}>
                    <Button onClick={props.onLogout}>Logout</Button>
                </div>
            </div>
        </Card>
    )
}

export default Home