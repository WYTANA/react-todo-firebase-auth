import React from 'react'
import "../styles/Login.css"

const Login = ({ title, button, href, link, headerStatement }) => {
    return (
        <div className="login">
            <div className="login-container">
                <h1 className="login-heading">{title}</h1>
                <input type="email" className="login-email" placeholder="Email" />
                <input type="password" className="login-password" placeholder="Password" />
                <button className="login-button">{button}</button>
                <div className="links">
                    <p>{headerStatement}</p>
                    <a href={href}>{link}</a>
                </div>
            </div>
        </div>
    )
}

export default Login