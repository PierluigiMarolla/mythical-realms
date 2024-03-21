import chatLogo from "../../../assets/img/chatLogoPlaceHolder.png"

export default function ChatCard(props) {

    return (
        <>
            <div className="border-t hover:scale-y-110 hover:duration-200 hover:border-b">
                    <div className="w-full bg-ancient py-3 flex justify-between items-center px-5">
                        <img className="w-24 max-h-28 overflow-y-hidden" src={props.cLogo}/>
                        <div className="w-full text-center">
                            <p className="medievalsharp-bold text-2xl capitalize ">{props.cTitle}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}