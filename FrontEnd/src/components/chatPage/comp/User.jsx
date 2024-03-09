import { useState } from "react"

export default function User(props) {

    let isOnline = props.online
    
    return (
        <>
            <div className="flex ps-4 items-center">
                <div className={`w-4 h-4 rounded-full border ${isOnline ? "bg-green" : "bg-red"}`}></div>
                <p className="ps-5 text-lg medievalsharp-bold text-white">{props.username}</p>
            </div>
        </>
    )
}