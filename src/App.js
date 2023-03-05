
import React, { useContext } from 'react';
import './App.css';
import MainHeader from './Components/Header/Header';
import LoginPage from './Components/LoginScreen/Login';
import MainPage from './Components/MainScreen/Main';
import AuthContext from './Context/AuthContext';

function App() {




  const context = useContext(AuthContext);
  return (
    <React.Fragment>
        <MainHeader isAuthenticated={context.isLoggedIn} onLoggingOut={context.onLogOut} onHeader={context.userInfo}></MainHeader>
      <main>
        {!context.isLoggedIn && <LoginPage></LoginPage>}
        {context.isLoggedIn && <MainPage></MainPage>}
      </main>
    </React.Fragment>

  );
}

export default App;
