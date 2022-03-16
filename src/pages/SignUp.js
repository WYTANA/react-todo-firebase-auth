import React, { useRef } from 'react'
import Login from '../components/Login'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

const SignUp = () => {
    // Grab a reference to value of email and password
    const emailRef = useRef()
    const passwordRef = useRef()

    // Register a user with Firebase
    const register = async () => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
            window.location = '/dashboard'
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <Login
                title="Sign Up"
                button="Sign Up"
                href="/"
                link="Sign In"
                headerStatement="Already Have an Account?"
                emailInput={emailRef}
                passwordInput={passwordRef}
                btnFunction={register}
            />
        </div>
    )
}

export default SignUp