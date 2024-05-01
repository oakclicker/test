import React from 'react';
import '../css/Friends.css';
import present_icon from '../friends_components/friends_icons/present.svg';
import coin_icon from '../friends_components/friends_icons/coin.png';

const Invite = () => {
  return (
   <button className='referal_invite'>
      <img src={present_icon} className='present_icon transparent' />
      <div className='invite_text transparent'>
         <p className='invite_title transparent'>Invite a friend</p>
         <div className='cash transparent'>
            <span className='check transparent'>8600</span>
            <img className='coin transparent' src={coin_icon} />
         </div>
      </div>
      <p></p>
   </button>
  );
}

export default Invite;