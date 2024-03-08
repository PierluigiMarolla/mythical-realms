import chatLogo from "../../../assets/img/chatLogoPlaceHolder.png"
import ChatCard from "./ChatCard"

export default function ChatSection() {
    

    return(
        <>
            <div className="container-home w-full md:w-1/2 bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll">
                <div className="flex justify-between mx-5 my-2 items-center">
                    <p className="text-3xl cinzel">Chats</p>
                </div>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>
                <a href="/chat"><ChatCard title="Chat Title" message="Chat Last Message" members="4" /></a>

            </div>
        </>
    )
}