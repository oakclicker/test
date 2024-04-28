import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://62.217.182.104:3000/user')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return (
    <div className="App">
      <h1>Информация о пользователе</h1>
      <p>Username: {userData.username}</p>
      <p>Fullname: {userData.fullname}</p>
      <p>User ID: {userData.user_id}</p>
    </div>
  );
}

export default App;
