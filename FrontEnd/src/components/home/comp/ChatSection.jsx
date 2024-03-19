import { NavLink } from "react-router-dom"
import chatLogo from "../../../assets/img/chatLogoPlaceHolder.png"
import ChatCard from "./ChatCard"
import { useAuth } from "../../../context/AuthProvider";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ChatSection() {
    
    const { userData } = useAuth()

  const[ chats, setChats] = useState([]);

useEffect(() => {
    fetch(`${BACKEND_URL}/chats`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request Error');
        }
        return response.json();
      })
      .then(data => {
        setChats(data);
        
      }) 
      .catch(error => {
        console.log('Si è verificato un errore:', error);
      });
  }, []);

  console.log(userData)

  let chatInfo = []

  chats.forEach(element => {
    if(element.users_id == userData.user.id){
        chatInfo.push(element)
    }
  })

  console.log(chatInfo)
    return(
        <>
            <div className="relative container-home w-full md:w-1/2 bg-scroll border-2 border-black rounded-md md:bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll">
                <div className="flex justify-between px-5 py-2 items-center bg-scroll">
                    <p className="text-[35px] w-full cinzel">Chats</p>
                </div>
                {chatInfo.map((chat, index) =>(
                    <NavLink to={`/chat/${chat.id}`}><ChatCard key={index} cTitle={chat.title} cLogo={chat.logo_url} /></NavLink>
                    ))}
                

            </div>
        </>
    )
}