import React from 'react'
import Login from '../components/Login'

const SignIn = () => {
    return (
        <div>
            <Login
                title="Sign In"
                button="Sign In"
                href="/signup"
                link="Sign Up"
                headerStatement="Need an Account?"
            />
        </div>
    )
}

export default SignIn