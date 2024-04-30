import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const telegramApp = window.Telegram.WebApp;
    const userData = telegramApp.initDataUnsafe.user;
    setUserData(userData);
  }, []);

  const handleAddBalance = () => {
    setBalance(prevBalance => prevBalance + 1);
  };

  return (
    <div className="App">
      {userData && (
        <div id="usercard">
          <div className="user-panel">
            <img src={userData.avatar} alt="Avatar" className="avatar" />
            <p>User ID: {userData.id}</p>
            <p>Fullname: {userData.first_name} {userData.last_name}</p>
          </div>
          <p className="balance">Balance: {balance}</p>
          <button className="add-balance-button" onClick={handleAddBalance}>
            Add Balance
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
