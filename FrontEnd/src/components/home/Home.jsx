import React, { useState } from 'react';
import Header from './comp/Header.jsx';
import ChatSection from './comp/ChatSection.jsx';
import CharacterSection from './comp/CharacterSection.jsx';
import Modal from './comp/Modal.jsx';

export default function Home() {

  const [sharedValue, setSharedValue] = useState(false);

  const handleChange = (newValue) => {
    setSharedValue(newValue);
  };

  return (
    <div className='bg-home relative'>
      <Modal sharedValue={sharedValue} handleChange={handleChange} />
      <Header handleChange={handleChange} />
      <div className='flex justify-around'>
        <ChatSection></ChatSection>
        <CharacterSection></CharacterSection>
      </div>
    </div>
  );
}