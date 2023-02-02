import { useEffect, useReducer, useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./Logins.module.css"

const emailReducer = (state, action) => {
    if (action.type === "USER_EMAIL") {
        return {value: action.val, isValid: action.val.includes("@")}
    } else if (action.type === "EMAIL_BLUR") {
        return {value: state.value, isValid: state.value.includes("@")}
    } else {
        return {value: "", isValid: false}
    }
}


const Logins = (props) => {

    // const [enteredEmail, setEnteredEmail] = useState("")
    // const [validEmail, setValidEmail] = useState()
    const [enteredPassword, setEnteredPassword] = useState("")
    const [validPassword, setValidPassword] = useState()
    const [validForm, setValidForm] = useState(false)

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: undefined
    })

    // useEffect(() => {
    //     let identifier = setTimeout(() => {
    //         console.log("ready")
    //         setValidForm(enteredEmail.includes("@") && enteredPassword.trim().length > 6)
    //     },500)

    //     return (() => {
    //         console.log("timeout")
    //         clearTimeout(identifier)
    //     })
        
    // }, [enteredEmail, enteredPassword])

    const enteredEmailHandler = (event) => {
        dispatchEmail({type: "USER_EMAIL", val: event.target.value})
    }

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
        if (event.target.value.trim().length > 6) {
            setValidForm(true)
        }
    }

    const checkEmailValidity = () => {
        dispatchEmail({type: "EMAIL_BLUR"})
    }

    const checkPasswordValidity = (event) => {
        setValidPassword(event.target.value.trim().length > 6)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(emailState.value, enteredPassword)
        setEnteredPassword("")
    }

    return (
        <Card className={classes.controls}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-mail</label>
                    <input
                     type="email" 
                     id="email"
                     value={emailState.value}
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