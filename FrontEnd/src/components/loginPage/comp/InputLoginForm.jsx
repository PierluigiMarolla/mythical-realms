
export default function InputLoginForm() {


    return (
        <>
            {/* <form className="form-structure">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" />
                <label htmlFor="userpwd">Password:</label>
                <input type="text" name="userpwd" />
                <button type="submit">Login</button>
                <a href="/register">Don't have an account? Please register here!</a>
            </form> */}
            <form className="flex flex-col form-structure">
                <label htmlFor="email">Email:</label>
                <input className="my-2 rounded-xl h-7 focus:outline-none focus:border focus:border-ancient ps-1" type="text" name="email" />
                <label htmlFor="userpwd">Password:</label>
                <input className="my-2 rounded-xl h-7 focus:outline-none focus:border focus:border-ancient ps-1" type="text" name="userpwd" />
                <button type="submit">Login</button>
                <a href="/register">Don't have an account? Please register here!</a>
            </form>
        </>
    )
}