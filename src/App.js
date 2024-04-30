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
          <p>Fullname: {userData.first_name} {userData.last_name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
