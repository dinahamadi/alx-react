import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'; 

const App = () => {
    return (
        <>
            <Notifications />
            <div className="App-body">
                <Header />
                <Login />
                <Footer />
            </div>
        </>
    );
};

export default App;
