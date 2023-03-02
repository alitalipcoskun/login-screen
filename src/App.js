
import React, { useState, useEffect } from 'react';
import './App.css';
import MainHeader from './Components/Header/Header';
import LoginPage from './Components/LoginScreen/Login';
import MainPage from './Components/MainScreen/Main';

function App() {  
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
  })
  const loginHandler = (enteredEmail, enteredPassword) => {
    //Dummy demo, login process must be here.
    localStorage.setItem('isLoggedIn','1');    
    setIsLoggedIn(true);
    setUserInfo({
      username: enteredEmail,
      password: enteredPassword,
    });
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', '0');
    setUserInfo({
      username: '',
      password: '',
    })
  }


  return (
    <React.Fragment>
        <MainHeader isAuthenticated = {isLoggedIn} onLoggingOut = {logoutHandler} onHeader = {user}></MainHeader>
        <main>
        {!isLoggedIn && <LoginPage onLogin = {loginHandler}></LoginPage>}
        {isLoggedIn && <MainPage onLoggingOut = {logoutHandler}></MainPage>}
        </main>
    </React.Fragment>
  );
}

export default App;
