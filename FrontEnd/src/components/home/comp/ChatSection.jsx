import chatLogo from "../../../assets/img/chatLogoPlaceHolder.png"

export default function ChatSection() {
    

    return(
        <>
            <div className="container-home w-2/5 bg-scroll border-2 border-ancient rounded-md bg-opacity-70 overflow-y-scroll">
                <div className="flex justify-between mx-5 my-2 items-center">
                    <p className="text-white text-2xl cinzel">Chats</p>
                </div>
                <div className="border-y">
                    <div className="w-full bg-ancient py-3 flex justify-between items-center">
                        <img className="w-24" src={chatLogo}/>
                        <div className="text-center">
                            <p className="cinzel">Chat Title</p>
                            <p className="medievalsharp">Chat Last Message</p>
                        </div>
                        <div className="text-center">
                            <p className="cinzel">Chat Members</p>
                            <p className="medievalsharp">4/10</p>
                        </div>
                    </div>
                </div>
                <div className="border-b">
                    <div className="w-full bg-ancient py-3">
                        <img className="w-24" src={chatLogo}/>
                    </div>
                </div>
                <div className="border-b">
                    <div className="w-full bg-ancient py-3">
                        <img className="w-24" src={chatLogo}/>
                    </div>
                </div>
                <div className="border-b">
                    <div className="w-full bg-ancient py-3">
                        <img className="w-24" src={chatLogo}/>
                    </div>
                </div>
                <div className="border-b">
                    <div className="w-full bg-ancient py-3">
                        <img className="w-24" src={chatLogo}/>
                    </div>
                </div>
                <div className="border-b">
                    <div className="w-full bg-ancient py-3">
                        <img className="w-24" src={chatLogo}/>
                    </div>
                </div>
                <div className="border-b">
                    <div className="w-full bg-ancient py-3">
                        <img className="w-24" src={chatLogo}/>
                    </div>
                </div>
            </div>
        </>
    )
}