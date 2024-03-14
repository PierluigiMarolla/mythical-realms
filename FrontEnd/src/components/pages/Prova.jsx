import React, { useState, useEffect } from 'react';

export default function Prova() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/user')

            .then(response => {
                if (!response.ok) {
                    throw new Error('Request Error');
                }
                return response;
            })
            .then(data => {
                setUserData(data);
                console.log(data)
            })
            .catch(error => {
                console.log('Si è verificato un errore:', error);
            });
    }, []);

    return (
        <div>
            {userData && (
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            )}
        </div>
    );
}


/* import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
});

const ChatComponent = () => {
  const [chatResponse, setChatResponse] = useState('');

  const sendChatRequest = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "assistant",
            "content": "ciao"
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      setChatResponse(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Errore durante la richiesta di chat:', error);
    }
  };

  useEffect(() => {
    sendChatRequest();
  }, []);

  return (
    <div>
      <h1>Risposta della ChatGPT:</h1>
      <p>{chatResponse}</p>
    </div>
  );
};

export default ChatComponent; */



