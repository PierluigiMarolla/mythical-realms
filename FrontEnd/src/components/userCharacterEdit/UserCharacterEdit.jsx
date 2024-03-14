import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function UserCharacterEdit() {

    const [filePreview, setFilePreview] = useState(null);

    function handleEditClick() {
        event.preventDefault();
    }

    function handleBackClick() {
        event.preventDefault();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFilePreview(e.target.result);
            }
            reader.readAsDataURL(file);
        }
    };

    /*  */

    const [isClicked, setIsClicked] = useState(false)
    const [editName, setEditName] = useState("CHARACTER_NAME")
    const [editAvatar, setEditAvatar] = useState("YOUR_EMAIL")

    function handleEditClick(event) {
        event.preventDefault();
        setIsClicked(true)
    }

    function handleBackClick(event) {
        event.preventDefault();
        setIsClicked(false)
        setEditName("CHARACTER_NAME")
        setEditAvatar("YOUR_EMAIL")
    }

    function handleUpdateClick(event) {
        event.preventDefault();
        setIsClicked(false)
        setEditName("CHARACTER_NAME")
        setEditEmail("YOUR_EMAIL")
    }

    let fetchContent = "FetchContentCharacter"

    return (
        <>
            <div className="bg-user-character relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form>
                        <div className="flex flex-col">
                            <label className="medievalsharp-bold uppercase text-3xl text-center">Edit character</label>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <label className="text-2xl medievalsharp-bold">Avatar:</label >
                                    <div className={`mt-4 ${isClicked ? "" : "hidden"}`}>
                                        <input className="w-full h-8 rounded-full px-2 outline-none focus:border" type="file" id="fileInput" onChange={handleFileChange} />
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="fileInput" className="bg-ancient p-3 rounded-full text-white border border-black me-3 text-center">Upload Character's Avatar</label>
                                            {filePreview && <img src={filePreview} className="bg-ancient border-2" alt="Prewiew" />}
                                        </div>
                                    </div>
                                    <div className={`mt-4 ${isClicked ? "hidden" : ""}`} >
                                        <label>{fetchContent}</label>
                                    </div>
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <p className="text-2xl medievalsharp-bold ">Name:</p>
                                    <p className={`${isClicked ? "hidden" : ""}`} >{fetchContent}</p>
                                    <input value={editName} onChange={(e) => setEditName(e.target.value)} className={`w-full h-8 rounded-full px-2 outline-none focus:border ${isClicked ? "" : "hidden"}`} type="text" />
                                </div>

                            </div>
                            <button onClick={handleEditClick} className={`bg-ancient border border-black w-1/2 self-center p-2 rounded-full ${isClicked ? "hidden" : ""}`}>Edit Character</button>
                            <div className={`${isClicked ? "flex" : "hidden"} justify-between`}>
                                <button onClick={handleBackClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full">Back</button>
                                <button type="submit" onClick={handleUpdateClick} className="bg-ancient border border-black w-1/3 self-center p-2 rounded-full">Update</button>
                            </div>
                            <NavLink to={"/"} className={"self-center"}><button type="submit" className="bg-ancient border border-black self-center py-2 px-3 mt-3 rounded-full">Back to Home</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}