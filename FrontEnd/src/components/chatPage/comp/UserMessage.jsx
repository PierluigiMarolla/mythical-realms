import avatarPNG from "../../../assets/img/avatarPlaceHolder.png"

export default function UserMessage() {


    return (
        <>
            <div className="mb-3 self-end flex">
                <img className="w-12 h-12 rounded-full mx-4" src={avatarPNG}/>
                <div className="rounded-l-xl bg-white px-3 py-1 w-max max-w-3xl">
                    <p className="text-[12px] font-bold">PG_NAME</p>
                    <p className="mt-1">USER_MESSAGE_PLACEHOLDER</p>
                </div>
            </div>
        </>
    )
}