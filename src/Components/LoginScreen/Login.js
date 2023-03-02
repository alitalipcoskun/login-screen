import React, {useState, useEffect, useReducer} from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import styles from './Login.module.css';


const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.includes("@")};
    }
    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes("@")};
    }
    return {value: '', isValid: false};
}

const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.trim().length > 6}
    }
    if(action.type === 'INPUT_BLUR'){
        return{value: state.value, isValid: state.value.trim().length > 6}
    }
}

function LoginPage(props){
    //const [enteredEmail, setEnteredEmail] = useState("");
    //const [emailIsValid, setEmailIsValid] = useState();

    //const [enteredPassword, setEnteredPassword] = useState("");
    //const [passwordIsValid, setPasswordIsValid] = useState();

    const [formIsValid, setFormIsValid] = useState();

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});


    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} =  passwordState;
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking validity.")
            setFormIsValid(
                emailIsValid && passwordIsValid
        )
        }, 500)
        return () => {
            console.log("Cleanup");
            clearTimeout(identifier)
        };   
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    }
    
    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    }

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    }



    return(<Card class = {styles.login}>
        <form onSubmit={submitHandler}>
            <div className= {`${styles.control} ${emailState.isValid === false ? styles.invalid : ''}`}>
                <label htmlFor="e-mail">E-mail</label>
                <input type={"e-mail"} id="e-mail" value = {emailState.value} onChange = {emailChangeHandler} onBlur = {validateEmailHandler}></input>
            </div>
            <div className = {`${styles.control} ${passwordState.isValid === false ? styles.invalid : ''}`}>
                <label htmlFor="password">Password</label>
                <input type={"password"} id = "password" value = {passwordState.value} onChange = {passwordChangeHandler} onBlur = {validatePasswordHandler}></input>
            </div>
            <div className = {styles.action}>
                <Button type = "submit" class = {styles.button} disabled = {!formIsValid}>
                        Login
                </Button>
            </div>
        </form>
    </Card>)
}



export default LoginPage;