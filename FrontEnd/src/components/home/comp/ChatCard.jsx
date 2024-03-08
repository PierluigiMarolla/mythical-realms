import chatLogo from "../../../assets/img/chatLogoPlaceHolder.png"

export default function ChatCard(props) {

    return (
        <>
            <div className="border-t ">
                    <div className="w-full bg-ancient py-3 flex justify-between items-center px-5">
                        <img className="w-24" src={chatLogo}/>
                        <div className="text-center">
                            <p className="cinzel">{props.title}</p>
                            <p className="medievalsharp">{props.message}</p>
                        </div>
                        <div className="text-center">
                            <p className="cinzel">Chat Members</p>
                            <p className="medievalsharp">{props.members}/10</p>
                        </div>
                    </div>
                </div>
        </>
    )
}