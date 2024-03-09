import { useState } from "react"
import UserSection from "./UserSection"
import CommentSection from "./CommentSection"

export default function LeftSection() {

    

    return (
        <>
            <div className="relative w-full md:w-2/5 lg:w-1/5 mx-auto">
                <UserSection/>
                <CommentSection/>
            </div>
        </>
    )
    
}