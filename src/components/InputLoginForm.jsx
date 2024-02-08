import { redirect } from "react-router-dom";

export default function InputLoginForm () {

    function tempLock(event) {
        event.preventDefault();
        redirect("/home")
    }
    return(
        <>
            <form className="form-structure" onSubmit={tempLock}>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"/>
                <label htmlFor="userpwd">Password:</label>
                <input type="text" name="userpwd"/>
                <button type="submit">Login</button>
                <a href="/register">Are you new? Please register here!</a>
            </form>
        </>
    )
}