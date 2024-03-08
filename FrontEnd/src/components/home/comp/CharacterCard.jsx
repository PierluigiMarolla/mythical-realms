import avatarPNG from "../../../assets/img/avatarPlaceHolder.png";

export default function CharacterCard(props) {

    return (
        <>
            <div className="w-32 bg-ancient p-3 text-center rounded-xl border border-black my-5 mx-3 hover:scale-110 hover:duration-500 cursor-pointer">
                <img className="rounded-3xl" src={avatarPNG} />
                <p>{props.ctrName}</p>
            </div>
        </>
    )
}