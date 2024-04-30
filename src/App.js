import React, { useState, useEffect } from 'react';
import './App.css';
import Rating from './pages/Rating.js';
import Mine from './pages/Mine.js';
import Earn from './pages/Earn.js';
import Friends from './pages/Friends.js';

function App() {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(0);
  const [activeWindow, setActiveWindow] = useState(null);

  useEffect(() => {
    const telegramApp = window.Telegram.WebApp;
    const userData = telegramApp.initDataUnsafe.user;
    setUserData(userData);
  }, []);

  const handleAddBalance = () => {
    setBalance(prevBalance => prevBalance + 1);
  };

  const handleWindowChange = (windowName) => {
    setActiveWindow(windowName);
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

      <div className="navigation">
        <button onClick={() => handleWindowChange('Rating')}>Rating</button>
        <button onClick={() => handleWindowChange('Mine')}>Mine</button>
        <button onClick={() => handleWindowChange('App')}>App</button>
        <button onClick={() => handleWindowChange('Earn')}>Earn</button>
        <button onClick={() => handleWindowChange('Friends')}>Friends</button>
      </div>

      {activeWindow === 'Rating' && <Rating />}
      {activeWindow === 'Mine' && <Mine />}
      {activeWindow === 'App' && <App />}
      {activeWindow === 'Earn' && <Earn />}
      {activeWindow === 'Friends' && <Friends />}
    </div>
  );
}

export default App;
