import avatarPNG from "../../../assets/img/avatarPlaceHolder.png"

export default function UserMessage(props) {


    return (
        <>
            <div className="mb-3 self-end flex">
                <img className="w-12 h-12 rounded-full mx-4" src={props.cAvatar}/>
                <div className="rounded-l-xl bg-white px-3 py-1 w-max max-w-3xl">
                    <p className="text-[12px] font-bold capitalize">{props.cName} </p>
                    <p className="mt-1">{props.message} </p>
                </div>
            </div>
        </>
    )
}