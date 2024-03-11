import { NavLink } from "react-router-dom";

export default function InputLoginForm() {
    
    function handleLoginrClick(event) {
        event.preventDefault();
    }

    return (
        <>
            <form className="flex flex-col" onSubmit={handleLoginrClick}>
                <label htmlFor="email">Email:</label>
                <input className="my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1" type="text" id="email" />
                <label htmlFor="userpwd">Password:</label>
                <input className="my-2 rounded-xl h-7 leading-7 focus:outline-none focus:border focus:border-ancient ps-1" type="text" id="userpwd" />
                <button className="bg-ancient hover:bg-white w-40 self-center rounded-3xl p-2.5 mt-5 cinzel" type="submit">Login</button>
                <NavLink className="text-center text-ancient mt-3" to={"/register"}>Don't have an account? Please register here!</NavLink>
            </form>
        </>
    )
}