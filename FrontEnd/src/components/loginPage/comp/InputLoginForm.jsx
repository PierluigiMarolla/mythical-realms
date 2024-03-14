import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import { useForm } from "react-hook-form";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function InputLoginForm() {

    const { fetcher, setAsLogged } = useAuth();


    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmit = (formData) => {
        fetcher(`${BACKEND_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status !== 401) {
                    setAsLogged(data.user, data["access_token"])
                } else {
                    setError('email')
                    setError('password', { type: 'custom', message: data.message })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email"
                    className={`${errors.email ? "text-red-700" : "text-gray-900"}`}>
                    Email:
                </label>
                <input
                    {...register("email", { required: 'Field "Email" is required' })}
                    type="email"
                    className={`my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1 ${errors.email ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" : "focus:border"}`}
                    id="email"
                    placeholder="Please Insert your Email..." />
                <label htmlFor="userpwd"
                    className={`block mb-2 text-sm font-medium ${errors.password ? "text-red-700" : "text-gray-900"}`}>
                    Password:
                </label>
                <input
                    {...register("password", { required: 'Field "Password" is required', })}
                    className={`my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1 ${errors.password ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" : "focus:border"}`}
                    type="password"
                    id="userpwd"
                    placeholder="Please Insert your Password..." />
                <button
                    className="bg-ancient hover:bg-white w-40 self-center rounded-3xl p-2.5 mt-5 cinzel"
                    type="submit">
                    Login
                </button>
                <NavLink className="text-center text-ancient mt-3" to={"/register"}>Don't have an account? Please register here!</NavLink>
            </form>
        </>
    )
}