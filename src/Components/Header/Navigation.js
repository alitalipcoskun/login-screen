import React, {useContext}from "react";
import AuthContext from "../../Context/AuthContext";
import Button from "../UI/Button/Button";
import styles from './Navigation.module.css';



function Navigation(props) {

    const context = useContext(AuthContext);
    return <nav className={styles.nav}>
    <ul>
        {context.isLoggedIn && <li>
            <a href="/">Users</a>
        </li>}
        {context.isLoggedIn && <li>
            <a href="/">Admin</a>
        </li>}
        {context.isLoggedIn && <li>
            <Button onAction={context.onLogOut}>Logout</Button>
        </li>}
    </ul>
</nav>

    // First Way Using React Context
    /*return (
        <AuthContext.Consumer>
            {(ctx) => {
                return (<nav className={styles.nav}>
                    <ul>
                        {ctx.isLoggedIn && <li>
                            <a href="/">Users</a>
                        </li>}
                        {ctx.isLoggedIn && <li>
                            <a href="/">Admin</a>
                        </li>}
                        {ctx.isLoggedIn && <li>
                            <Button onAction={logOutHandler}>Logout</Button>
                        </li>}
                    </ul>
                </nav>);
            }}

        </AuthContext.Consumer>
    )*/
};



export default Navigation;