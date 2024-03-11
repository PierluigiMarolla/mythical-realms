import OtherUserMessage from "./UserMessage.jsx"
import UserMessage from "./OtherUserMessage.jsx"
import sendSVG from "../../../assets/svg/sendSVG.svg"

export default function Chat(){

    return(
        <>
            <div className="relative w-full md:w-3/6 lg:w-4/6 mx-auto">
                <div className="text-center text-white cinzel text-2xl py-8">
                    <p>CHAT_TITLE_PLACEHOLDER</p>
                </div>
                <div className="container-chat h-screen bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll py-3 flex flex-col">
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                </div>
                <form className="container-input flex justify-around mt-12 items-center h-10">
                    <select className="w-16 h-16 rounded-full bg-scroll border ps-3 pe-1 hover:pe-4 hover:ps-4 hover:scale-105 hover:duration-200 character-select" name="character" id="character">
                        <option value="0">PG</option>
                        <option value="1">PG1</option>
                    </select>
                    <input className="ms-10 ps-3 h-10 w-full rounded-full overflow-y-scroll word-break outline-none hover:border focus:border" type="text" />
                    <button className="ms-5 w-12 h-12 p-1 rounded-full border bg-ancient hover:scale-[1.2] hover:duration-200" type="submit"><img src={sendSVG} /></button>
                </form>
            </div>
        </>
   
 )

}