import Logo from '../commmonComp/Logo'
import InputLoginForm from '../InputLoginForm'

export default function LoginForm() {
    

    return(
        <>
            <div className='sfondo'>
                <div className="form-card">
                    <Logo></Logo>
                    <div>
                        <h1>Welcome to <br/>
                        Mythical Realms</h1>
                    </div>
                    <InputLoginForm></InputLoginForm>
                </div>
            </div>
        </>
    )
}