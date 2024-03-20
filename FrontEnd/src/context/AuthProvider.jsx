import { createContext, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext({});

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [userData, setUserData] = useState({
		token: "",
		user: null,
	});

	const setAsLogged = (user, token) => {
		localStorage.setItem("auth_token", token)
		setUserData({ token: token, user });
		navigate("/");
	};

	const setLogout = () => {
		localStorage.removeItem("auth_token")
		setUserData({ token: "", user: null });
		navigate("/login");
	};

	const loginUserOnStartup = () => {
		const token = localStorage.getItem("auth_token")
		if (token) {
			fetcher(`${BACKEND_URL}/user`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				}
			})
				.then((response) => response.json())
				.then((data) => {
					setUserData({ token, user: data });
					navigate("/");
				})
				.catch((error) => {
					console.log(error);
					setUserData({ token: "", user: null });
					setLogout();
				});
		} else {
			setUserData({ token: "", user: null });
			if(location.pathname === '/register') {
				return;
			}
			navigate("/login");
		}
	};

	function updateOptions(options) {
		const update = {
			...options,
			headers: { ...options.headers, Accept: "application/json" },
		};
		if (userData.token) {
			update.headers = {
				...update.headers,
				Authorization: `Bearer ${userData.token}`,
			};
		}
		return update;
	}

	const fetcher = (url, options) => {
		return fetch(url, updateOptions(options));
	};

	return (
		<AuthContext.Provider
			value={{
				userData,
				setAsLogged,
				setLogout,
				loginUserOnStartup,
				fetcher,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;