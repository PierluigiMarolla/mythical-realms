import Chat from "./comp/Chat"


export default function ChatPage() {
    return (
        <>
            <div className="bg-chat overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className='flex flex-col md:flex-row justify-around items-center'>
                    <Chat />
                </div>
            </div>
        </>
    )
}