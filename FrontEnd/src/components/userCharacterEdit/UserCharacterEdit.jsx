import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function UserCharacterEdit() {

    const { id } = useParams();
    const { userData, fetcher } = useAuth()

    const [effettoEseguito, setEffettoEseguito] = useState(0);

    const [ctrId, setCtrId] = useState();
    const [fetchedCtr, setFetchedCtr] = useState([]);
    

    useEffect(() => {
        setCtrId(id);
    }, [id]);

    useEffect(() => {
        if (effettoEseguito < 2) {
            fetch(`${BACKEND_URL}/characters/${ctrId}`, {
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
                    setFetchedCtr(data);
                    setEffettoEseguito(prev => prev + 1);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [effettoEseguito, ctrId]);


    let imageInitUrl = "http://localhost:8000"

    return (
        <>
            <div className="bg-user-character relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form className="w-max mx-auto text-center">
                        <div className="flex flex-col">
                            <label className="medievalsharp-bold uppercase text-3xl text-center">Edit character</label>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <label className="text-2xl medievalsharp-bold">Avatar:</label >
                                        <div className="mt-4 mx-auto w-max" >
                                            <img src={`${imageInitUrl}${fetchedCtr.avatar_url}`} />
                                        </div>
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold ">Name:</p>
                                        <p className="text-3xl cinzel">{fetchedCtr.name}</p>
                                </div>

                            </div>
                                <NavLink to="/" className={"self-center"} ><button className="bg-ancient border border-black p-2 rounded-full mt-3 ">Back to Home</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}