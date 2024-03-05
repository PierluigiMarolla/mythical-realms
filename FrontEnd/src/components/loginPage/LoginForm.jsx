import React from 'react'
import Logo from '../commmonComp/Logo'
import InputLoginForm from './comp/InputLoginForm'

export default function LoginForm() {


    return (
        <>
            <div className='bg-landing'>
                <div className="flex-column form-card bg-scroll py-5 px-16 border-2 border-ancient rounded-3xl absolute right-1/2 top-2/4">
                    <div className='flex justify-center'>
                        <Logo></Logo>
                    </div>
                    <div>
                        <p className='text-center medievalsharp-bold'>Welcome to</p>
                        <p className='mb-5 text-center medievalsharp-bold text-3xl'>Mythical Realms</p>
                    </div>
                    <InputLoginForm></InputLoginForm>
                </div>
            </div>
        </>
    )
}