import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './components/RegisterPage/RegisterPage.jsx';
import Prova from './components/pages/Prova.jsx';
import Home from './components/home/Home.jsx';
import ChatPage from './components/chatPage/ChatPage.jsx';
import UserProfile from './components/userProfile/UserProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/chat",
    element: <ChatPage />
  },
  {
    path: "/userProfile",
    element: <UserProfile />
  },
  {
    path: "/prova",
    element: <Prova />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



