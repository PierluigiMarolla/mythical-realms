import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function UserCharacterAdd() {

    const [filePreview, setFilePreview] = useState(null);

    function handleEditClick(event) {
        event.preventDefault();
    }

    function handleBackClick(event) {
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

    return (
        <>
            <div className="bg-user-character relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex-column form-card bg-scroll w-full md:w-1/2 xl:w-1/3 p-5 xl:px-16 border-2 border-ancient md:rounded-3xl absolute right-1/2 top-2/4">
                    <form>
                        <div className="flex flex-col">
                            <label className="medievalsharp-bold uppercase text-3xl text-center">Add a character</label>
                            <div className="mt-5">
                                <div className="my-2 py-3 items-center">
                                    <label className="text-2xl medievalsharp-bold">Avatar:</label >
                                    <div className="mt-4">
                                        <input className="w-full h-8 rounded-full px-2 outline-none focus:border" type="file" id="fileInput" onChange={handleFileChange} />
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="fileInput" className="h-12 bg-ancient p-3 rounded-full text-white border border-black">Upload Character's Avatar</label>
                                            {filePreview && <img src={filePreview} className="bg-ancient border-2" alt="Prewiew" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 py-3 items-center">
                                    <label className="text-2xl medievalsharp-bold ">Name:</label >
                                    <input className="w-full h-8 rounded-full px-2 outline-none focus:border" placeholder="Insert Character Name" type="text" />
                                </div>

                            </div>
                            <button type="submit" onClick={handleEditClick} className="bg-ancient border border-black w-1/2 self-center p-2 rounded-full">Add Character</button>
                            <NavLink to={"/"} className={"self-center"}><button type="submit" className="bg-ancient border border-black self-center py-2 px-3 mt-3 rounded-full">Back</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}