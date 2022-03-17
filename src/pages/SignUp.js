import React, { useRef } from 'react'
import Login from '../components/Login'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

const SignUp = () => {
    // Grab a reference to value of email and password
    const emailRef = useRef()
    const passwordRef = useRef()

    // Register and create a user with Firebase
    const register = async () => {
        try {
            // Create user with Firebase auth
            await createUserWithEmailAndPassword
                (
                    auth,
                    emailRef.current.value,
                    passwordRef.current.value
                )
                .then(async (cred) => {
                    // Create user doc in the Firebase users' collection
                    const docRef = doc(db, "users", `${cred.user.uid}`)
                    const payload = {
                        tasks: [
                            {
                                text: "My first Todo",
                                status: false,
                            },
                        ]
                    }
                    await setDoc(docRef, payload)
                    // If doc set, send user to dashboard
                    if (cred) {
                        window.location = '/dashboard'
                    }
                })
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