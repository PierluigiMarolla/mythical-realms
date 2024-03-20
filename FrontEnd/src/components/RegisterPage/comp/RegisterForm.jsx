import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';
import { useForm } from 'react-hook-form';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function RegisterForm() {
    
    const { fetcher, setAsLogged } = useAuth();

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

    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label
                    htmlFor="name">
                    Username:
                </label>
                <input
                    {...register("name", { required: 'Field "Name" is required' })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    type="text"
                    name="name" />
                <label
                    htmlFor="email">
                    Email:
                </label>
                <input
                    {...register("email", { required: 'Field "Email" is required' })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    type="email"
                    name="email" />
                <label
                    htmlFor="password">
                    Password:
                </label>
                <input
                    {...register("password", {
                        required: 'Field "Password" is required',
                    })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    type="password"
                    name="password" />
                <label
                    htmlFor="password_confirmation">
                    Password:
                </label>
                <input
                    {...register("password_confirmation", {
                        required: 'Field "Password confirmation" is required',
                    })}
                    className='my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1'
                    type="password"
                    name="password_confirmation" />
                <button
                    className="bg-ancient hover:bg-white w-40 self-center rounded-3xl p-2.5 mt-5 cinzel"
                    type="submit">
                    Register
                </button>
                <NavLink className="text-center text-ancient mt-3" to={"/login"}>You have already registered? click here to login!</NavLink>
            </form>
        </>
    )
}
