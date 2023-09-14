import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [author, setAuthor] = useState('');
  const [messageText, setMessageText] = useState('');
  const [editingMessageId, setEditingMessageId] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/post');
      setMessages(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handlePublish = async () => {
    try {
      const newMessage = { author, message: messageText };
      await axios.post('/post', newMessage);
      clearInputs();
      fetchMessages();
    } catch (error) {
      console.error('Erreur lors de la publication du message :', error);
    }
  };

  const handleEdit = (messageId) => {
    const messageToEdit = messages.find((message) => message._id === messageId);
    if (messageToEdit) {
      setAuthor(messageToEdit.author);
      setMessageText(messageToEdit.message);
      setEditingMessageId(messageId);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedMessage = { author, message: messageText };
      await axios.put(`/post/${editingMessageId}`, updatedMessage);
      clearInputs();
      fetchMessages();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du message :', error);
    }
  };

  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`/post/${messageId}`);
      fetchMessages();
    } catch (error) {
      console.error('Erreur lors de la suppression du message :', error);
    }
  };

  const clearInputs = () => {
    setAuthor('');
    setMessageText('');
    setEditingMessageId(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="publish-container">
          <input
            type="text"
            placeholder="Auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          {editingMessageId ? (
            <button onClick={handleUpdate}>Mettre à jour</button>
          ) : (
            <button onClick={handlePublish}>Publier</button>
          )}
        </div>
        {messages.map((message) => (
          <div key={message._id} className="message">
            <p>Auteur: {message.author}</p>
            <p>Message: {message.message}</p>
            <p>Date du post: {message.createdAt}</p>
            <button onClick={() => handleEdit(message._id)}>Modifier</button>
            <button onClick={() => handleDelete(message._id)}>Supprimer</button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
