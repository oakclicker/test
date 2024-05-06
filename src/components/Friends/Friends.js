import React from 'react';
import './Friends.css';
import Invite from './friends_components/invite.js';
import FriendsList from './friends_components/friends_list.js'
import User from './friends_components/friends_icons/User_icon.svg';

const Friends = () => {
  return (
    <div className='invite__container'>
        <h2>Referral Program</h2>
        <div className='first_section_friend'>
          <Invite />
          <Invite />
        </div>
        
        
        <div className='secnod_section_friend'>
        <h2>Friends list</h2>

          <FriendsList
            friend_name = 'User'
            friend_image = {User}
            friend_money = '8 600,00'
          />
          <FriendsList
            friend_name = 'User'
            friend_image = {User}
            friend_money = '8 600,00'
          />
          <FriendsList
            friend_name = 'User'
            friend_image = {User}
            friend_money = '8 600,00'
          />
          <FriendsList
            friend_name = 'User'
            friend_image = {User}
            friend_money = '8 600,00'
          />
          <FriendsList
            friend_name = 'User'
            friend_image = {User}
            friend_money = '8 600,00'
          />
          
        </div>

    </div>
  );
}

export default Friends;
