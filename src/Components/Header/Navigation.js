import React from "react";
import Button from "../UI/Button/Button";
import styles from './Navigation.module.css';



function Navigation(props){
    const logOutHandler = () => {
        props.onLoggingOut()
    }



    return(<nav className= {styles.nav}>
        <ul>
            {props.isLoggedIn && <li>
                <a href = "/">Users</a>
            </li>}
            {props.isLoggedIn && <li>
                <a href="/">Admin</a>
            </li>}
            {props.isLoggedIn && <li>
                <Button onAction = {logOutHandler}>Logout</Button>
            </li>}
        </ul>
    </nav>)
};



export default Navigation;