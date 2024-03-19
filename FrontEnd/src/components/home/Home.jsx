import React, { useEffect, useState } from 'react';
import Header from './comp/Header.jsx';
import ChatSection from './comp/ChatSection.jsx';
import CharacterSection from './comp/CharacterSection.jsx';
import Modal from './comp/Modal.jsx';
import { useAuth } from '../../context/AuthProvider.jsx';



export default function Home() {

  const [sharedValue, setSharedValue] = useState(false);

  const handleChange = (newValue) => {
    setSharedValue(newValue);
  };


  return (
    <div className={`bg-home relative ${sharedValue ? 'overflow-hidden' : ''} `}>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <Modal sharedValue={sharedValue} handleChange={handleChange} />
      <Header handleChange={handleChange} />
      <div className='flex flex-col md:flex-row justify-around'>
        <ChatSection></ChatSection>
        <CharacterSection></CharacterSection>
      </div>
    </div>
  );
}