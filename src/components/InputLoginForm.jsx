export default function InputLoginForm () {
    return(
        <>
            <form className="form-structure">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"/>
                <label htmlFor="userpwd">Password:</label>
                <input type="text" name="userpwd"/>
                <button type="submit">Login</button>
                <a href="#">Are you new? Plese register here!</a>
            </form>
        </>
    )
}