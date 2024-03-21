import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function UserCharacterEdit() {

    const [filePreview, setFilePreview] = useState(null);

    function handleEditClick(event) {
        event.preventDefault();
    }

    function handleBackClick(event) {
        event.preventDefault();
    }
    const [avatar, setAvatar] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file)
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFilePreview(e.target.result);
            }
            reader.readAsDataURL(file);
        }
    };

    


    const { id } = useParams();
    const { userData, fetcher } = useAuth()
    const { register, handleSubmit } = useForm({ mode: "all" })

    console.log(userData)

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

    const onSubmit = (characterData) => {
        // Qui puoi inviare i dati al backend utilizzando fetch, axios o un'altra libreria per le chiamate API.
        // Ad esempio:

        const ctrFormData = new FormData();
             
        if(characterData.name) {
            ctrFormData.append(
                "name",
                characterData.name
            )   
        }

        if(avatar) {
            ctrFormData.append(
                "avatar",
                avatar
            )
        }

        

        fetcher(`${BACKEND_URL}/characters/${ctrId}`, {
            method: 'POST',
            body: ctrFormData,
        })
        
        .then((response) => response.json())
            .then((data) => {
                if (!data.errors) {
                    navigate("/")
                } else {
                    Object.keys(data.errors).forEach(field => {
                        if (data.errors[field]) {
                            setError(field, {
                                types: getErrorTypes(data.errors[field])
                            })
                        }
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /*  */

    const [isClicked, setIsClicked] = useState(false)
    const [editName, setEditName] = useState("")
    const [isClickedUsername, setIsClickedUsername] = useState(false)
    const [isClickedImage, setIsClickedImage] = useState(false)


    function handleEditClick(event) {
        event.preventDefault();
        setEditName(fetchedCtr.name)
        setIsClicked(true)
    }

    function handleBackClick(event) {
        event.preventDefault();
        setIsClickedUsername(false)
        setIsClickedImage(false)
        setEditName(fetchedCtr.name)
    }

    function handleUpdateClick(event) {
        setIsClickedUsername(false)
        setIsClickedImage(false)
        setEditName(fetchedCtr.name)
    }

    let imageInitUrl = "http://localhost:8000"


    function handleUpdateClickUsername() {
        if (isClickedUsername) {
            setIsClickedUsername(false)
        } else {
            setIsClickedUsername(true)
        }
    }

    function handleUpdateClickImage(event) {
        if (isClickedImage) {
            setIsClickedImage(false)
        } else {
            setIsClickedImage(true)
        }
    }

    return (
        <>
            <div className="bg-user-character relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label className="medievalsharp-bold uppercase text-3xl text-center">Edit character</label>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <label className="text-2xl medievalsharp-bold">Avatar:</label >
                                    {isClickedImage &&
                                        <div className={`mt-4 `}>
                                            <input className="w-full h-8 rounded-full px-2 outline-none focus:border" type="file" id="fileInput" onChange={handleFileChange} />
                                            <div className="flex justify-between items-center">
                                                <label htmlFor="fileInput" className="bg-ancient p-3 rounded-full text-white border border-black me-3 text-center hover:cursor-pointer">Upload Character's Avatar</label>
                                                {filePreview && <div className="w-42"><img src={filePreview} className="bg-ancient border-2" alt="Prewiew" /></div>}
                                            </div>
                                        </div>
                                    }
                                    {!isClickedImage &&
                                        <div className="mt-4" >
                                            <img src={`${imageInitUrl}${fetchedCtr.avatar_url}`} />
                                        </div>
                                    }

                                    {!isClickedImage &&
                                        <button onClick={handleUpdateClickImage} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Update</button>
                                    }
                                    {isClickedImage &&
                                        <button onClick={handleUpdateClickImage} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Cancel</button>
                                    }
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold ">Name:</p>

                                    {!isClickedUsername &&
                                        <p>{fetchedCtr.name}</p>
                                    }
                                    {isClickedUsername &&
                                        <input  {...register("name", { required: 'Name is required' })} name="name" className="w-full h-8 rounded-full px-2 outline-none focus:border" type="text" />
                                    }
                                    {!isClickedUsername &&
                                        <button onClick={handleUpdateClickUsername} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Update</button>
                                    }
                                    {isClickedUsername &&
                                        <button onClick={handleUpdateClickUsername} className="bg-ancient border border-black w-1/4 self-center p-1 mt-2 rounded-full">Cancel</button>
                                    }
                                </div>

                            </div>
                            {(isClickedUsername || isClickedImage) &&
                                <div className="flex justify-between">
                                <button onClick={handleBackClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full ">Back</button>
                                <button type="submit" onClick={handleUpdateClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full">Update</button>
                            </div>
                            }
                            {!(isClickedUsername || isClickedImage) &&
                                <NavLink to="/" className={"self-center"} ><button className="bg-ancient border border-black p-2 rounded-full mt-3 ">Back to Home</button></NavLink>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}