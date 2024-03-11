import React from 'react'
import { NavLink } from 'react-router-dom';

function handleRegisterClick(event) {
    event.preventDefault();
}

export default function RegisterForm(){
    return (
        <>
            <form className="flex flex-col" onSubmit={handleRegisterClick}>
                <label htmlFor="username">Username:</label>
                <input className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1' type="text" name="username" />
                <label htmlFor="email">Email:</label>
                <input className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1' type="text" name="email" />
                <label htmlFor="userpwd">Password:</label>
                <input className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1' type="text" name="userpwd" />
                <button className="bg-ancient hover:bg-white w-40 self-center rounded-3xl p-2.5 mt-5 cinzel" type="submit">Register</button>
                <NavLink className="text-center text-ancient mt-3" to={"/"}>You have already registered? click here to login!</NavLink>
            </form>
        </>
    )
}
