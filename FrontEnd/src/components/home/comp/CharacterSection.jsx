import { NavLink } from "react-router-dom";
import plusSVG from "../../../assets/svg/plus-solid.svg";
import CharacterCard from "./CharacterCard";
import { useAuth } from "../../../context/AuthProvider";
import { useEffect, useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function CharacterSection() {


    const { userData, fetcher } = useAuth()

  const[ characters, setCharacters] = useState([]); 

  useEffect(() => {
    if(userData){
      fetch(`${BACKEND_URL}/characters`, {
        headers: {
          'Authorization': `Bearer ${userData.token}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Errore nella richiesta');
          }
          return response.json();
        })
        .then(data => {
          setCharacters(data);
        }) 
        .catch(error => {
          console.log('Si è verificato un errore:', error);
        });
    }
  }, [userData]);

  let imageInitUrl = "http://localhost:8000"

  console.log()

    return (
        <>
            <div className="relative container-home w-full md:w-1/3 bg-scroll border-2 border-black rounded-md mt-10 sm:mt-0 md:bg-opacity-70 overflow-y-scroll scrollbar scrollbar-ancient">
                <div className="flex  justify-between bg-scroll px-5 items-center py-2">
                    <p className="text-3xl cinzel">Character</p>
                    <NavLink to={"/userCharacterAdd"}>
                        <button>
                            <img className="bg-ancient p-2 w-10 rounded-md border border-ancient" src={plusSVG} />
                        </button>
                    </NavLink> 
                </div>
                <div className="flex justify-around flex-wrap">
                {characters.map((character, index) =>(
                    <NavLink to={`/userCharacterEdit/${character.id}`}><CharacterCard key={character.id} ctrName={character.name} ctrAvatar={`${imageInitUrl}${character.avatar_url}`} /></NavLink>
                    ))}
                    
                </div>
            </div>
        </>
    )
}