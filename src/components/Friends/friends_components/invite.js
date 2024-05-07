import React from 'react';
import '../Friends.css';
import present_icon from '../friends_components/friends_icons/present.svg';
import coin_icon from '../friends_components/friends_icons/coin.png';

const Invite = () => {
  return (
   <button className='referal_invite'>
      <img src={present_icon} className='present_icon transparent' alt='present' />
      <div className='invite_text transparent'>
         <p className='invite_title transparent'>Invite a friend</p>
         <div className='cash transparent'>
            <span className='check transparent'>8 600, 00</span>
            <div className='coin_container'>
               <img className='coin transparent' src={coin_icon} alt='coin' />
            </div>
         </div>
      </div>
      <p></p>
   </button>
  );
}

export default Invite;
