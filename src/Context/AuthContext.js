import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogIn: (enteredEmail, enteredPassword) => {},
    onLogOut: () => {},
    userInfo: {
        username: '',
        password : '',
    },
});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const userLoggedInInfo = localStorage.getItem('isLoggedIn');
        if(userLoggedInInfo === '1'){
            setIsLoggedIn(true);
        }
    }, []);
    const [user, setUserInfo] = useState({
        username: '',
        password: '',
    });
    const loginHandler = (enteredEmail, enteredPassword) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        setUserInfo({
            username: enteredEmail,
            password: enteredPassword,
        });
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', '0');
        setUserInfo({
            username: '',
            password: '',
        });
    }

    return (<AuthContext.Provider value = {{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogIn: loginHandler,
        userInfo: user,
    }}>{props.children}</AuthContext.Provider>)
    
}


export default AuthContext;