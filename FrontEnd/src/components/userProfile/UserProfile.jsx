import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function UserProfile() {
    const [isClicked, setIsClicked] = useState(false)
    const [editUsername, setEditUsername] = useState("YOUR_USERNAME")
    const [editEmail, setEditEmail] = useState("YOUR_EMAIL")
    const [editPwd, setEditPwd] = useState("YOUR_PASSWORD")

    function handleEditClick(event) {
        event.preventDefault();
        setIsClicked(true)
    }

    function handleBackClick() {
        event.preventDefault(event);
        setIsClicked(false)
        setEditUsername("YOUR_USERNAME")
        setEditEmail("YOUR_EMAIL")
        setEditPwd("YOUR_PASSWORD")
    }

    function handleUpdateClick(event) {
        event.preventDefault();
        setIsClicked(false)
        setEditUsername("YOUR_USERNAME")
        setEditEmail("YOUR_EMAIL")
        setEditPwd("YOUR_PASSWORD")
    }

    let fetchContent = "FetchContentProfile"
    

    return (
        <>
            <div className="bg-user-profile relative">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form>
                        <div className="flex flex-col">
                            <p className="medievalsharp-bold uppercase text-3xl text-center">Your Profile</p>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold ">Username:</p>
                                    <p className={`${isClicked ? "hidden" : ""}`} >{fetchContent}</p>
                                    <input value={editUsername} onChange={(e) => setEditUsername(e.target.value)} className={`w-full h-8 rounded-full px-2 outline-none focus:border ${isClicked ? "" : "hidden"}`} type="text" />
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold">Email:</p>
                                    <p className={`${isClicked ? "hidden" : ""}`} >{fetchContent}</p>
                                    <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} className={`w-full h-8 rounded-full px-2 outline-none focus:border ${isClicked ? "" : "hidden"}`} type="text" />
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold">Password:</p>
                                    <p className={`${isClicked ? "hidden" : ""}`} >{fetchContent}</p>
                                    <input value={editPwd} onChange={(e) => setEditPwd(e.target.value)} className={`w-full h-8 rounded-full px-2 outline-none focus:border ${isClicked ? "" : "hidden"}`} type="text" />
                                </div>
                            </div>
                            <button onClick={handleEditClick} className={`bg-ancient border border-black w-1/2 self-center p-2 rounded-full ${isClicked ? "hidden" : ""}`}>Edit Profile</button>
                            <div className={`${isClicked ? "flex" : "hidden"} justify-between`}>
                                <button onClick={handleBackClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full">Back</button>
                                <button type="submit" onClick={handleUpdateClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full">Update</button>
                            </div>
                            <NavLink className={"self-center"} to={"/home"}><button onClick={handleBackClick} className="bg-ancient border border-black p-2 rounded-full mt-3">Back to Home</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}