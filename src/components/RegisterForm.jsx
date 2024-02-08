import React from 'react'

function tempLock(event) {
    event.preventDefault();
}

export default function RegisterForm(){
    return (
        <>
            <form className="form-structure register" onSubmit={tempLock}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" />
                <label htmlFor="userpwd">Password:</label>
                <input type="text" name="userpwd" />
                <button type="submit">Register</button>
                <a href="/">Have already an account? Click here!</a>
            </form>
        </>
    )
}
