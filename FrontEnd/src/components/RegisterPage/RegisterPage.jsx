import React from 'react'
import RegisterForm from './comp/RegisterForm'
import Logo from '../commmonComp/Logo'

export default function RegisterPage() {
  return (
    <>
      <div className='sfondo'>
        <div className="form-card">
          <Logo></Logo>
          <div>
            <h1>Welcome to <br />
              Mythical Realms</h1>
          </div>
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </>
  )
}
