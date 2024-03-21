import React, { useState } from "react";
import messageSVG from "../../../assets/svg/message-solid.svg";
import logoutSVG from "../../../assets/svg/logout-solid.svg";
import userSVG from "../../../assets/svg/profile-solid.svg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

export default function Header({ handleChange }) {

    const handleButtonClick = () => {
        handleChange(true);
    };

    const { userData, setLogout } = useAuth()

    return (
        <>
            <div className="relative flex justify-between md:px-24 h-28 items-center px-5">
                <div className="text-white">
                    <p className="text-xl md:text-2xl medievalsharp">Welcome,</p>
                    <p className="text-xl md:text-3xl cinzel">{userData?.user?.name} </p>
                </div>
                <div className="">
                    <button className="hover:scale-150 hover:duration-500" onClick={handleButtonClick}>
                        <img className="bg-scroll p-2 w-10 rounded-md" src={messageSVG} />
                    </button>
                    <NavLink to={"/login"}>
                        <button  onClick={setLogout} className="hover:scale-150 hover:duration-500 ms-10">
                            <img className="bg-scroll p-2 w-10 rounded-md" src={logoutSVG} />
                        </button>
                    </NavLink>
                    <NavLink to={"/userProfile"}>
                        <button className="hover:scale-150 hover:duration-500 ms-10">
                            <img className="bg-scroll p-2 w-10 rounded-md" src={userSVG} /> 
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}