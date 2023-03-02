import React from "react";

import Card from "../UI/Card/Card";

import styles from './Main.module.css';


function MainPage(props){
    return(<Card class = {styles.home}>
        <h1>Welcome Back!</h1>
    </Card>)


}

export default MainPage;