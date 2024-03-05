import React, { useState } from "react";
import userSVG from "../../../assets/svg/user-solid.svg";

export default function Header({handleChange}) {

    const handleButtonClick = () => {
        handleChange(true);
      };
    return (
        <>
            <div className="flex justify-between px-24 h-28 items-center">
                <div className="text-white">
                    <p className="text-2xl medievalsharp">Welcome,</p>
                    <p className="text-3xl cinzel">USERNAME_PLACEHOLDER</p>
                </div>
                <div>
                    <button onClick={handleButtonClick}>
                        <img className="bg-scroll p-2 w-10 rounded-md" src={userSVG} />
                    </button>
                </div>
            </div>
        </>
    )
}