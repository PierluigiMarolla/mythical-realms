import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function UserProfile() {

    const { userData, fetcher, setLogout } = useAuth()
    const { handleSubmit, register } = useForm({ mode: "all" });

    const [isClickedUsername, setIsClickedUsername] = useState(false)
    const [isClickedEmail, setIsClickedEmail] = useState(false)
    const [isClickedPwd, setIsClickedPwd] = useState(false)
    const [editUsername, setEditUsername] = useState()
    const [editEmail, setEditEmail] = useState()


    useEffect(() => {
        setEditUsername(userData.user.name)
        setEditEmail(userData.user.email)
    }, [])

    function handleBackClick(event) {
        event.preventDefault();
        setIsClickedUsername(false)
        setIsClickedEmail(false)
        setIsClickedPwd(false)
        setEditUsername(userData.user.name)
        setEditEmail(userData.user.email)
    }

    function handleUpdateClick(event) {
        setIsClicked(false)
    }

    function handleUpdateClickUsername() {
        if(isClickedUsername){
            setIsClickedUsername(false)
        } else {
            setIsClickedUsername(true)
        }
    }

    function handleUpdateClickEmail(event) {
        if(isClickedEmail){
            setIsClickedEmail(false)
        } else {
            setIsClickedEmail(true)
        }
    }

    function handleUpdateClickPwd(event) {
        if(isClickedPwd){
            setIsClickedPwd(false)
        } else {
            setIsClickedPwd(true)
        }
    }

    const onSubmit = (dataOfUser) => {

        fetcher(`${BACKEND_URL}/users/${userData.user.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${userData.token}`,
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(dataOfUser),
        })

            .then((response) => response.json())
            .then((data) => {
                setLogout()
                if (!data.errors) {

                } else {
                    Object.keys(data.errors).forEach(field => {
                        if (data.errors[field]) {
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
            <div className="bg-user-profile relative">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <p className="medievalsharp-bold uppercase text-3xl text-center">Your Profile</p>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold ">Username:</p>
                                    <p className={`${isClickedUsername ? "hidden" : ""}`} >{editUsername}</p>
                                    {isClickedUsername &&
                                        <input  {...register("name", { required: 'Name is required' })} name="name" className="w-full h-8 rounded-full px-2 outline-none focus:border" type="text" />
                                    }
                                    {!isClickedUsername &&
                                        <button type="submit" onClick={handleUpdateClickUsername} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Update</button>
                                    }
                                    {isClickedUsername &&
                                        <button type="submit" onClick={handleUpdateClickUsername} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Cancel</button>
                                    }
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold">Email:</p>
                                    <p className={`${isClickedEmail ? "hidden" : ""}`} >{editEmail}</p>
                                    {isClickedEmail &&
                                        <input  {...register("email", { required: 'Email is required' })} name="email" className="w-full h-8 rounded-full px-2 outline-none focus:border" type="text" />
                                    }
                                    {!isClickedEmail &&
                                        <button type="submit" onClick={handleUpdateClickEmail} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Update</button>
                                    }
                                    {isClickedEmail &&
                                        <button type="submit" onClick={handleUpdateClickEmail} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Cancel</button>
                                    }
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold">Password:</p>
                                    <p className={`${isClickedPwd ? "hidden" : ""}`} >***************</p>
                                    {isClickedPwd &&
                                        <input {...register("password", { required: 'Password is required' })} name="password" className="w-full h-8 rounded-full px-2 outline-none focus:border" type="text" />
                                    }
                                    {!isClickedPwd &&
                                        <button type="submit" onClick={handleUpdateClickPwd} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Update</button>
                                    }
                                    {isClickedPwd &&
                                        <button type="submit" onClick={handleUpdateClickPwd} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Cancel</button>
                                    }
                                </div>
                            </div>
                            {(isClickedUsername || isClickedEmail || isClickedPwd) &&
                                <div className="flex justify-between">
                                <button onClick={handleBackClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full ">Back</button>
                                <button type="submit" onClick={handleUpdateClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full">Update</button>
                            </div>
                            }
                            {!(isClickedUsername || isClickedEmail || isClickedPwd) &&
                                <NavLink to="/" className={"self-center"} ><button className="bg-ancient border border-black p-2 rounded-full mt-3 ">Back to Home</button></NavLink>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}