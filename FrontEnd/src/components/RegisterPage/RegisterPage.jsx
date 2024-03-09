import React from 'react'
import RegisterForm from './comp/RegisterForm'
import Logo from '../commmonComp/Logo'

export default function RegisterPage() {

  
  return (
    <>
      <div className='bg-landing'>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="flex-column form-card bg-scroll py-5 px-16 border-2 border-ancient rounded-3xl absolute right-1/2 top-2/4">
          <div className='flex justify-center'>
            <Logo></Logo>
          </div>
          <div>
            <p className='text-center medievalsharp-bold'>Welcome to</p>
            <p className='mb-5 text-center medievalsharp-bold text-3xl'>Mythical Realms</p>
          </div>
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </>
  )
}
