import { useState } from "react"
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function UserCharacterAdd() {

    const { fetcher } = useAuth()

    const [filePreview, setFilePreview] = useState(null);

    const { register, handleSubmit } = useForm({ mode: "all" });
    const [avatar, setAvatar] = useState();

    const getErrorTypes = (errors) => {
        const types = {};
        errors.forEach((error, i) => {
            types[`apiError${i + 1}`] = error
        })
        console.log(types);
        return types;
    }

    const navigate = useNavigate();

    const onSubmit = (characterData) => {
        // Qui puoi inviare i dati al backend utilizzando fetch, axios o un'altra libreria per le chiamate API.
        // Ad esempio:

        const ctrFormData = new FormData();
        ctrFormData.append(
            "name",
            characterData.name
        )        

        ctrFormData.append(
            "avatar",
            avatar
        )

        fetcher(`${BACKEND_URL}/characters`, {
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

    return (
        <>
            <div className="bg-user-character relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label className="medievalsharp-bold uppercase text-3xl text-center">Add a character</label>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <label
                                        className="text-2xl medievalsharp-bold">
                                        Avatar:
                                    </label >
                                    <div className="mt-4">
                                        <input
                                            {...register("avatar", { required: 'Avatar image is required' })}
                                            className="w-full h-8 rounded-full px-2 outline-none focus:border"
                                            type="file"
                                            name="avatar"
                                            id="fileInput"
                                            onChange={handleFileChange} />
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="fileInput" className="h-12 bg-ancient p-3 rounded-full text-white border border-black">Upload Character's Avatar</label>
                                            {filePreview && <div className="w-36"><img src={filePreview} className="bg-ancient border-2" alt="Prewiew" /></div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <label
                                        className="text-2xl medievalsharp-bold ">
                                        Name:
                                    </label >
                                    <input
                                        {...register("name", { required: 'Field "Name" is required' })}
                                        name="name"
                                        className="w-full h-8 rounded-full px-2 outline-none focus:border"
                                        placeholder="Insert Character Name"
                                        type="text" />
                                </div>

                            </div>
                            <button className="bg-ancient border border-black w-1/2 self-center p-2 rounded-full">Add Character</button>
                            <NavLink to={"/"} className={"self-center"}><button className="bg-ancient border border-black self-center py-2 px-3 mt-3 rounded-full">Back</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}