import xSVG from "../../../assets/svg/x-solid.svg";
import searchSVG from "../../../assets/svg/search-solid.svg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;



export default function Modal({ sharedValue, handleChange }) {

    const { userData, fetcher } = useAuth()

    const handleButtonClick = () => {
        handleChange(false)
    }

    const [logo, setLogo] = useState()
    const [selectCtr, setSelectCtr] = useState()

    function handleOnChangeSelect(event) {
        setSelectCtr(event.target.value)
    }


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setLogo(file)
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFilePreview(e.target.result);
            }
            reader.readAsDataURL(file);
        }
    };

    const [filePreview, setFilePreview] = useState(null);

    const { register, handleSubmit } = useForm({ mode: "all" });;

    const getErrorTypes = (errors) => {
        const types = {};
        errors.forEach((error, i) => {
            types[`apiError${i + 1}`] = error
        })
        console.log(types);
        return types;
    }

    const onSubmit = (chatData) => {
        // Qui puoi inviare i dati al backend utilizzando fetch, axios o un'altra libreria per le chiamate API.
        // Ad esempio:

        const chatFormData = new FormData();
        chatFormData.append(
            "title",
            chatData.name
        )

        chatFormData.append(
            "logo",
            logo
        )

        chatFormData.append(
            "character_id",
            selectCtr
        )

        fetcher(`${BACKEND_URL}/chats`, {
            headers: {
                'Authorization': `Bearer ${userData.token}`
            },
            method: 'POST',
            body: chatFormData,
        })

            .then((response) => response.json())
            .then((data) => {
                if (!data.errors) {
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

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        if(userData && userData.token !== undefined) {
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

    let characterInfo = []

    characters.forEach(element => {
        if (element.user_id == userData.user.id) {
            characterInfo.push(element)
        }
    });

    return (
        <>
            <div className={`absolute left-1/2 z-50 modal block w-screen h-full bg-black bg-opacity-75 ${sharedValue ? 'block' : 'hidden'}`}>
                <div className="absolute flex top-1/2 left-1/2 flex-col justify-center h-full w-full md:w-1/3 my-20 mx-auto bg-scroll container-modal border-ancient rounded-md">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 p-5">
                            <p className="medievalsharp-bold uppercase text-3xl text-center">Add a chat</p>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <label
                                        className="text-2xl medievalsharp-bold">
                                        Logo:
                                    </label >
                                    <div className="mt-4">
                                        <input
                                            {...register("avatar_url", { required: 'Avatar image is required' })}
                                            className="w-full h-8 rounded-full px-2 outline-none focus:border"
                                            type="file"
                                            name="avatar_url"
                                            id="fileInput"
                                            onChange={handleFileChange} />
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="fileInput" className="h-12 bg-ancient p-3 rounded-full text-white border border-black">Upload Character's Avatar</label>
                                            {filePreview && <img src={filePreview} className="bg-ancient border-2 w-52" alt="Prewiew" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <label
                                        className="text-2xl medievalsharp-bold ">
                                        Select a character:
                                    </label >
                                    <select
                                        onChange={handleOnChangeSelect}
                                        className="w-full h-8 rounded-full px-2 outline-none focus:border"
                                        name="character_id">
                                        <option className="bg-ancient" value="0">Select Character Name</option>
                                        {characterInfo && characterInfo.map((crt, index) => (
                                            <option className="bg-ancient" key={index} value={`${crt.id}`}>{`${crt.name}`}</option>
                                        ))

                                        }
                                    </select>
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <label
                                        className="text-2xl medievalsharp-bold ">
                                        Title:
                                    </label >
                                    <input
                                        {...register("name", { required: 'Field "Title" is required' })}
                                        name="name"
                                        className="w-full h-8 rounded-full px-2 outline-none focus:border"
                                        placeholder="Insert a Title"
                                        type="text" />
                                </div>

                            </div>
                            <button className="bg-ancient border border-black w-1/2 self-center p-2 rounded-full">Add Chat</button>
                            <button className="bg-ancient border border-black w-1/2 self-center p-2 rounded-full" onClick={handleButtonClick}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}