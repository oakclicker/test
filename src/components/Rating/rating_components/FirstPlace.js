import React from 'react';
import '../Rating.css';
import FirstPlaceIcon from './rating_icons/FirstPlace.png';
import MiddleCoin from './rating_icons/middle_coin.png';


const FirstPlace = ({user_name, user_money, user_image}) => {
   return (
      <div className='first_place'>

         <img src={user_image} alt='user icon' className='large_user_icon' />
         <img src={FirstPlaceIcon} alt='2nd place' className='user_place first_place_icon' />
         <p className='user_name'>{user_name}</p>
         <div className='user_money_container'>
           <p className='user_money user_money_1st'>{user_money}</p>
           <img src={MiddleCoin} alt='coin' />
         </div>

      </div>
   );
}

export default FirstPlace;