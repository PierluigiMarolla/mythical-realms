import OtherUserMessage from "./OtherUserMessage.jsx"
import UserMessage from "./UserMessage.jsx"
import sendSVG from "../../../assets/svg/sendSVG.svg"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function Chat() {

    const { id } = useParams();
    const [chatID, setChatID] = useState()
    const [effettoEseguito, setEffettoEseguito] = useState(0);
    const [effettoEseguito2, setEffettoEseguito2] = useState(0);
    const [effettoEseguito3, setEffettoEseguito3] = useState(0);
    const [fetchedChat, setFetchedChat] = useState([])
    const [ctrId, setCtrId] = useState();
    const [fetchedCtr, setFetchedCtr] = useState([]);
    const [messageList, setMessageList] = useState([])


    useEffect(() => {
        setChatID(id);
    }, [id]);


    useEffect(() => {
        if (effettoEseguito < 2) {
            fetch(`${BACKEND_URL}/chats/${chatID}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella richiesta');
                    }
                    return response.json();
                })
                .then(data => {
                    setFetchedChat(data);
                    setCtrId(data.characters_id)
                    setEffettoEseguito(prev => prev + 1);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [effettoEseguito, chatID]);

    
    useEffect(() => {
        if (effettoEseguito2 < 2) {
            fetch(`${BACKEND_URL}/characters/${ctrId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella richiesta');
                    }
                    return response.json();
                })
                .then(data => {
                    setFetchedCtr(data);
                    setEffettoEseguito2(prev => prev + 1);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [effettoEseguito2, ctrId]);


    useEffect(() => {
        if (effettoEseguito3 < 2) {
            fetch(`${BACKEND_URL}/chats/message`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella richiesta');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    setMessageList(data);
                    setEffettoEseguito3(prev => prev + 1);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [effettoEseguito3, chatID]);

    let chatMessage = [];


    /* messageList.forEach(element => {
        if(element.chat_id === chatID){
            chatMessage.push(element)
        }
      }); */

    


    

    return (
        <>
            <div className="relative w-full md:w-3/6 lg:w-4/6 mx-auto">
                <div className="text-center text-white medievalsharp-bold text-[35px] py-8 capitalize">
                    <p>{fetchedChat.title}</p>
                </div>
                <div className="container-chat h-screen bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll py-3 flex flex-col">
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                    <UserMessage cName={fetchedCtr.name} cAvatar={fetchedCtr.avatar_url} ></UserMessage>
                    <OtherUserMessage></OtherUserMessage>
                </div>
                <form className="container-input flex justify-around mt-12 items-center h-10">
                    <img className="w-32" src={fetchedCtr.avatar_url} />
                    <input className="ms-10 ps-3 h-10 w-full rounded-full overflow-y-scroll word-break outline-none hover:border focus:border" type="text" />
                    <button className="ms-5 w-12 h-12 p-1 rounded-full border bg-ancient hover:scale-[1.2] hover:duration-200" type="submit"><img src={sendSVG} /></button>
                </form>
            </div>
        </>

    )

}