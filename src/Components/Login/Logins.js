import { useEffect, useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./Logins.module.css"


const Logins = (props) => {

    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    const [validEmail, setValidEmail] = useState()
    const [validPassword, setValidPassword] = useState()
    const [validForm, setValidForm] = useState(false)

    useEffect(() => {
        let identifier = setTimeout(() => {
            console.log("ready")
            setValidForm(enteredEmail.includes("@") && enteredPassword.trim().length > 6)
        },500)

        return (() => {
            console.log("timeout")
            clearTimeout(identifier)
        })
        
    }, [enteredEmail, enteredPassword])

    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const checkEmailValidity = (event) => {
        setValidEmail(event.target.value.includes("@"))
    }

    const checkPasswordValidity = (event) => {
        setValidPassword(event.target.value.trim().length > 6)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(enteredEmail, enteredPassword)
        setEnteredEmail("")
        setEnteredPassword("")
    }

    return (
        <Card className={classes.controls}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${validEmail === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-mail</label>
                    <input
                     type="email" 
                     id="email"
                     value={enteredEmail}
                     onChange={enteredEmailHandler}
                     onBlur={checkEmailValidity}
                      />
                </div>

                <div className={`${classes.control} ${validPassword === false ? classes.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input
                     type="password" 
                     id="password"
                     autoComplete="password"
                     value={enteredPassword}
                     onChange={enteredPasswordHandler}
                     onBlur={checkPasswordValidity}
                     />
                </div>
                
                <div className={classes.but}>
                    <Button type="submit" disabled={!validForm}>Login</Button>
                </div>
            </form>
        </Card>
    )
}



export default Logins