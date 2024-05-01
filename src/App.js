import React, { useState, useEffect } from 'react';
import './App.css';
import RatingIcon from './icons/rating.png';
import MineIcon from './icons/mine.png';
import AppIcon from './icons/menu.png';
import EarnIcon from './icons/task.png';
import FriendsIcon from './icons/friends.png';
import RatingActiveIcon from './icons/active/rating-active.png';
import MineActiveIcon from './icons/active/mine-active.png';
import AppActiveIcon from './icons/active/menu-active.png';
import EarnActiveIcon from './icons/active/tasks-active.png';
import FriendsActiveIcon from './icons/active/friends-active.png';
import Rating from './components/Rating/Rating';
import Mine from './components/Mine/Mine';
import Earn from './components/Earn/Earn';
import Friends from './components/Friends/Friends';
import MainButton from './icons/main_button.png';
import MainCoin from './icons/main_coin.png';

function App() {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(0);
  const [activeWindow, setActiveWindow] = useState('App'); 

  useEffect(() => {
    const telegramApp = window.Telegram.WebApp;
    const userData = telegramApp.initDataUnsafe.user;
    setUserData(userData);
  }, []);

  const handleAddBalance = () => {
    setBalance(prevBalance => prevBalance + 1);
  };

  const handleWindowChange = (windowName) => {
    setActiveWindow(prevWindow => (prevWindow !== windowName ? windowName : prevWindow));
  };  

  const getIcon = (windowName) => {
    switch (windowName) {
      case 'Rating':
        return activeWindow === 'Rating' ? RatingActiveIcon : RatingIcon;
      case 'Mine':
        return activeWindow === 'Mine' ? MineActiveIcon : MineIcon;
      case 'App':
        return activeWindow === 'App' ? AppActiveIcon : AppIcon;
      case 'Earn':
        return activeWindow === 'Earn' ? EarnActiveIcon : EarnIcon;
      case 'Friends':
        return activeWindow === 'Friends' ? FriendsActiveIcon : FriendsIcon;
      default:
        return null;
    }
  };

  return (
    <div className="App">

      {activeWindow === 'App' && (
        <div className="app-window">
          {userData && (

        <div id="usercard">
          <div className="user-panel">
            <img src={userData.avatar} alt="Avatar" className="avatar transparent" />
            <div className='userInfo_container transparent'>
              <p className='transparent'>{userData.first_name} {userData.last_name}</p>
              <p className='transparent user_id'>ID: {userData.id}</p>
            </div>
          </div>
          
          <div className='user_balance_container transparent'>
            <p className="balance">
              {balance}
              <img src={MainCoin} alt='coin' />
            </p>
            <button className="add-balance-button" onClick={handleAddBalance}>
              <img src={MainButton} alt='Main Button' className='transparent' />
            </button>
          </div>
        </div>
      )}
        </div>
      )}

      <div className="navigation">
        <button className={`nav-button ${activeWindow === 'Rating' && 'active'}`} onClick={() => handleWindowChange('Rating')}>
          <img src={getIcon('Rating')} alt="Rating Icon" />
          <p className='menu__text'>Rating</p>
        </button>
        <button className={`nav-button ${activeWindow === 'Mine' && 'active'}`} onClick={() => handleWindowChange('Mine')}>
          <img src={getIcon('Mine')} alt="Mine Icon" />
          <p className='menu__text'>Mine</p>
        </button>
        <button className={`nav-button ${activeWindow === 'App' && 'active'}`} onClick={() => handleWindowChange('App')}>
          <img src={getIcon('App')} alt="App Icon" />
          <p className='menu__text'>App</p>
        </button>
        <button className={`nav-button ${activeWindow === 'Earn' && 'active'}`} onClick={() => handleWindowChange('Earn')}>
          <img src={getIcon('Earn')} alt="Earn Icon" />
          <p className='menu__text'>Earn</p>
        </button>
        <button className={`nav-button ${activeWindow === 'Friends' && 'active'}`} onClick={() => handleWindowChange('Friends')}>
          <img src={getIcon('Friends')} alt="Friends Icon" />
          <p className='menu__text'>Friends</p>
        </button>
      </div>

      {activeWindow === 'Rating' && <Rating />}
      {activeWindow === 'Mine' && <Mine />}
      {activeWindow === 'Earn' && <Earn />}
      {activeWindow === 'Friends' && <Friends />}
    </div>
  );
}

export default App;
