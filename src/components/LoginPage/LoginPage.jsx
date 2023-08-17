import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function LoginPage({ handleSignUp }) {
    return (
        <>
        <SignUpForm handleSignUp={handleSignUp} />
        </>
    )
}