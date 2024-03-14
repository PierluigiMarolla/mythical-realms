import React, { useEffect } from 'react'
import LoginForm from './components/loginPage/LoginForm'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Home from "./components/home/Home";
import ChatPage from "./components/chatPage/chatPage";
import UserProfile from "./components/userProfile/UserProfile";
import UserCharacterAdd from "./components/userCharacter/UserCharacterAdd";
import UserCharacterEdit from "./components/userCharacterEdit/UserCharacterEdit";
import Prova from "./components/pages/Prova";
import { useAuth } from './context/AuthProvider';






function App() {

  const { userData, loginUserOnStartup, setLogout } = useAuth();

	useEffect(() => {
		loginUserOnStartup();
	}, []);

  return (
    <>
        <Routes>
          <Route path='/login'element={<LoginForm></LoginForm>} />
          <Route path='/register'element={<RegisterPage></RegisterPage>} />
          <Route path='/'element={<Home></Home>} />
          <Route path='/chat'element={<ChatPage></ChatPage>} />
          <Route path='/userProfile'element={<UserProfile></UserProfile>} />
          <Route path='/userCharacterAdd'element={<UserCharacterAdd></UserCharacterAdd>} />
          <Route path='/userCharacterEdit'element={<UserCharacterEdit></UserCharacterEdit>} />
          <Route path='/prova'element={<Prova></Prova>} />
        </Routes>
    </>
  )
}

export default App
