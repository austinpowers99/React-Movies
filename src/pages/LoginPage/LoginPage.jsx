import React, { useState } from 'react';
import LoginForm from '../SignUpForm/SignUpForm';

export default function LoginPage({ setUser }) {
    const handleLogin = (username) => {
        setUser(username);
        };
    
        return (
        <>
            <h1>Login Page</h1>
            <LoginForm onLogin={handleLogin} />
        </>
        );
    }