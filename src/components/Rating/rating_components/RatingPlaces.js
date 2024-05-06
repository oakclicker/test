import React from 'react';
import '../Rating.css';
import User from './rating_icons/user.svg';
import MiddleCoin from './rating_icons/middle_coin.png';


const RatingPlaces = ({ place, userName, userMoney }) => {
   return (
      <div className='rating_places'>
         <p className='player_place'>{place}</p>
         <img src={User} alt='user' className='player_avatar' />
         <div className='player_place_info'>
            <p className='player_name'>{userName}</p>
            <div className='player_cash'>
               <p>{userMoney}</p>
               <img src={MiddleCoin} alt='coin' />
            </div>
         </div>
         <p></p>
      </div>
   );
}

export default RatingPlaces;