import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" />
                <label htmlFor="password"> Password: </label>
                <input id="password" type="password" />
                <button type="button">OK</button>
            </form>
        </div>
    );
};

export default Login;