import xSVG from "../../../assets/svg/x-solid.svg";
import searchSVG from "../../../assets/svg/search-solid.svg";

export default function Modal({ sharedValue, handleChange }) {

    const handleButtonClick = () => {
        handleChange(false)
    }

    return (
        <>
            <div className={`absolute left-1/2 z-50 modal block w-screen h-screen bg-black bg-opacity-75 ${sharedValue ? 'block' : 'hidden'} `}>
                <div className="w-1/3 my-20 mx-auto bg-scroll container-home border-ancient rounded-md">
                    <div className="flex justify-between py-5 px-5">
                        <div className="flex">
                            <label htmlFor="username"><img className="bg-ancient w-10 p-2 me-2 rounded-full" src={searchSVG} /></label>
                            <input type="text" name="username" className="rounded-full" />
                        </div>
                        <div className="text-center text-white cursor-pointer">
                            <button className="" onClick={handleButtonClick}><img className=" bg-ancient p-2 w-7 rounded-full" src={xSVG} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}