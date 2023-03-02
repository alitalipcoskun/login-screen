import React from "react";

import styles from './Header.module.css';
import Navigation from "./Navigation";


function MainHeader(props){
    const actionHandler = () => {
        props.onLoggingOut();
    }

    const {username} = props.onHeader;
    let parsedName = username.split("@")[0];
    return(<header className= {styles.header}>
        {<h1>{!props.isAuthenticated ? "A typical log-in screen" : `Welcome ${parsedName}!`}</h1>}
        <Navigation isLoggedIn = {props.isAuthenticated} onLoggingOut = {actionHandler}></Navigation>
    </header>)
}


export default MainHeader;