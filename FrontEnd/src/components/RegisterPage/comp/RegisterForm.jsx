import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';
import { useForm } from 'react-hook-form';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function RegisterForm() {
    
    const { fetcher, setAsLogged } = useAuth();


    const [registerErr, setRegisterErr] = useState(false)



	const {
		register,
		handleSubmit,
		setValue,
		setError,
		formState: { errors },
	} = useForm({ mode: "all" });

	const getErrorTypes = (errors) => {
		const types = {};
		errors.forEach((error, i) => {
			types[`apiError${i + 1}`] = error
		})
		console.log(types);
		return types;
	}

    const navigate = useNavigate();

	const onSubmit = (formData) => {
		fetcher(`${BACKEND_URL}/register`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				if(!data.errors) {
                    navigate("/login")
				} else {
					Object.keys(data.errors).forEach(field => {
						if(data.errors[field]) {
							setError(field, {
								types: getErrorTypes(data.errors[field])
							})	
						}
					})
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

    const [pwdCheck, setPwdCheck] = useState()
    const [pwdConfCheck, setPwdConfCheck] = useState()

    function handlePasswordChange (event){
        setPwdCheck(event.target.value)
    }

    function handlePasswordConfChange (event){
        setPwdConfCheck(event.target.value)
    } 

    console.log(pwdCheck)
    

    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label 
                    className={`${errors.name ? "text-red" : "text-gray-900"}`}
                    htmlFor="name">
                    Username:
                </label>
                <input
                    {...register("name", { required: 'Field "Name" is required' })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    placeholder='Insert your Username'
                    type="text"
                    name="name" />
                    {errors.name &&
                        <label className="text-red text-xs text-center">Username is required</label>
                    }
                <label 
                    className={`${errors.email ? "text-red" : "text-gray-900"}`}
                    htmlFor="email">
                    Email:
                </label>
                <input
                    {...register("email", { required: 'Field "Email" is required' })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    placeholder='Insert your Email'
                    type="email"
                    name="email" />
                    {errors.email &&
                        <label className="text-red text-xs text-center">Email is required or already taken</label>
                    }
                <label 
                    className={`${errors.password ? "text-red" : "text-gray-900"}`}
                    htmlFor="password">
                    Password:
                </label>
                <input
                    {...register("password", {
                        required: 'Field "Password" is required',
                    })}
                    placeholder='Insert your Password'
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    onChange={handlePasswordChange}
                    type="password"
                    name="password" />
                    {errors.password &&
                        <label className="text-red text-xs text-center">Password is required</label>
                    }
                    {pwdCheck.length < 8 &&
                        <label className="text-red text-xs text-center">The password must be 8 or more character longer</label>
                    }
                <label 
                    className={`${errors.password_confirmation ? "text-red" : "text-gray-900"}`}
                    htmlFor="password_confirmation">
                    Confirm Password:
                </label>
                <input
                    {...register("password_confirmation", {
                        required: 'Field "Password confirmation" is required',
                    })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    placeholder='Confirm your Password'
                    onChange={handlePasswordConfChange}
                    type="password"
                    name="password_confirmation" />
                    {errors.password_confirmation &&
                        <label className="text-red text-xs text-center">Please confirm your password</label>
                    }
                <button
                    className="bg-ancient hover:bg-white w-40 self-center rounded-3xl p-2.5 mt-5 cinzel"
                    type="submit">
                    Register
                </button>
                {!(pwdCheck == pwdConfCheck) &&
                        <label className="text-red text-xs text-center mt-2">Warning: The Password don't match</label>
                    }
                <NavLink className="text-center text-ancient mt-3" to={"/login"}>You have already registered? click here to login!</NavLink>
            </form>
        </>
    )
}
