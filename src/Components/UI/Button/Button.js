import React from "react";
import styles from './Button.module.css';



function Button(props) {
    return (<button
        onClick={props.onAction}
        className={`${styles.button} ${props.class}`}
        type={props.type || 'button'}
        disabled={props.disabled}
    >
        {props.children}
    </button>);
};

export default Button;