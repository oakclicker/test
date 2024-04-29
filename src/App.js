import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const telegramApp = window.Telegram.WebApp;
    const userData = telegramApp.initDataUnsafe.user;
    setUserData(userData);
  }, []);

  return (
    <div className="App">
      {userData && (
        <div id="usercard">
          <p>User ID: {userData.id}</p>
          <p>Is Bot: {userData.isBot ? 'Yes' : 'No'}</p>
          <p>First Name: {userData.first_name}</p>
          <p>Last Name: {userData.last_name}</p>
          <p>Username: {userData.username}</p>
          <p>Language Code: {userData.language_code}</p>
        </div>
      )}
    </div>
  );
}

export default App;
