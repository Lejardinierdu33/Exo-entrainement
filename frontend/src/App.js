import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const handleClick = async () => {
    try {
      const response = await window.fetch('/post');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      setMessages(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Dis Bonjour</button>
        {/* Utilisez map pour afficher chaque message */}
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>Author: {message.author}</p>
              <p>Message: {message.message}</p>
              <p>Date du Post: {message.createdAt}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
