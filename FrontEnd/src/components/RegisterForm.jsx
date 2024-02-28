import React from 'react'

function tempLock(event) {
    event.preventDefault();
}

export default function RegisterForm(){
    return (
        <>
            <form className="form-structure register" onSubmit={tempLock}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" />
                <label htmlFor="userpwd">Password:</label>
                <input type="text" name="userpwd" />
                <button type="submit">Register</button>
                <a href="/">Already registered? Click here!</a>
            </form>
        </>
    )
}
