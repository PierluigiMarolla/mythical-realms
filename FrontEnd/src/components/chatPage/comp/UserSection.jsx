import { useState } from "react"
import User from "./User"

export default function UserSection() {

    const [isOnline,setIsOnline] = useState(true)

    return (
        <>
            <div className="text-center text-white cinzel text-2xl py-8">
                <p>Users</p>
            </div>
            <div className="container-users h-screen bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll py-3 flex flex-col">
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
                <User username="USERNAME" online={isOnline} />
            </div>
        </>
    )
}