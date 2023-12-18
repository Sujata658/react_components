import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Logging in:', userData.email, userData.password);
    };

    return (
        <div className="outer-login-container">
            <div className='login-container'>
                <div className="login-title">Login</div>
                <form>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={handleClick}>
                        Login
                    </button>
                </form>
                <div className='note'>Output can be seen in the console</div>
            </div>
        </div>

    );
};

export default Login;
