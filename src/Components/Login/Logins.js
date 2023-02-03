import { useEffect, useReducer, useRef, useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import Input from "../UI/Input"
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

const passwordReducer = (state, action) => {
    if (action.type === "USER_PASSWORD") {
        return {value: action.val, isValid: action.val.trim().length > 6}
    } else if (action.type === "PASSWORD_BLUR") {
        return {value: state.value, isValid: state.value.trim().length > 6} 
    }
    return {value: "", isValid: false}
}


const Logins = (props) => {

    // const [enteredEmail, setEnteredEmail] = useState("")
    // const [validEmail, setValidEmail] = useState()
    // const [enteredPassword, setEnteredPassword] = useState("")
    // const [validPassword, setValidPassword] = useState()
    const [validForm, setValidForm] = useState(false)

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: undefined
    })

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: undefined
    })

    const {isValid: emaisIsValid} = emailState
    const {isValid: passwordIsValid} = passwordState 

    useEffect(() => {
        let identifier = setTimeout(() => {
            console.log("ready")
            setValidForm(emaisIsValid && passwordIsValid)
        },500)

        return (() => {
            console.log("timeout")
            clearTimeout(identifier)
        })
        
    }, [emaisIsValid, passwordIsValid])

    // const emailInputRef = useRef()
    // const passwordInputRef = useRef()

    const enteredEmailHandler = (event) => {
        dispatchEmail({type: "USER_EMAIL", val: event.target.value})
    }

    const enteredPasswordHandler = (event) => {
        dispatchPassword({type: "USER_PASSWORD", val: event.target.value})
    }

    const checkEmailValidity = () => {
        dispatchEmail({type: "EMAIL_BLUR"})
    }

    const checkPasswordValidity = () => {
        dispatchPassword({type: "PASSWORD_BLUR"})
    }
    // console.log(emailInputRef, passwordInputRef)

    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(emailState.value, passwordState.value)
        

    }

    return (
        <Card className={classes.controls}>
            <form onSubmit={submitHandler}>
            <Input
                // ref={emailInputRef}
                label="E-mail"
                isValid={emailState.isValid}
                id="email"
                value={emailState.value}
                onChange={enteredEmailHandler}
                onBlur={checkEmailValidity} 
                />

                <Input
                // ref={passwordInputRef}
                label="Password"
                isValid={passwordState.isValid}
                id="password"
                value={passwordState.value}
                onChange={enteredPasswordHandler}
                onBlur={checkPasswordValidity} 
                />

                <div className={classes.but}>
                    <Button type="submit" disabled={!validForm}>Login</Button>
                </div>
            </form>
        </Card>
    )
}



export default Logins