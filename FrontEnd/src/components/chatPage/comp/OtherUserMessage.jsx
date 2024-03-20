import avatarPNG from "../../../assets/img/narrator.png"

export default function OtherUserMessage(props) {

    return (
        <>
            <div className="mb-3 w-full flex">
                <div className="px-3 py-1 rounded-r-xl bg-white max-w-3xl w-max break-words">
                    <p className="text-[12px] font-bold">Narrator</p>
                    <p className="mt-1">{props.message}</p>
                </div>
                <img className="w-12 h-12 rounded-full mx-4" src={avatarPNG} alt="" />
            </div>
        </>
    )
}