import React from 'react';
import './css/Friends.css';
import Invite from './friends_components/invite.js';
import Friends_list from './friends_components/friends_list.js'

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
          <Friends_list />
          <Friends_list />
          <Friends_list />
          <Friends_list />
          <Friends_list />
        </div>

    </div>
  );
}

export default Friends;
