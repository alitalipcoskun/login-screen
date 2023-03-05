import React, { useImperativeHandle, useRef } from "react";
import styles from './Input.module.css';


const Input = React.forwardRef((props, ref)  => {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref , () => {
        return {
            activate: focus,
        }
    })


    return (
        <div className= {`${styles.control} ${props.isValid === false ? styles.invalid : ''}`}>
            <label htmlFor={props.htmlFor}>{props.labelName}</label>
            <input ref = {inputRef}type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur}></input>
        </div>
    )
})


export default Input;