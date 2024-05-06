import React from 'react';
import '../Rating.css';
import ThirdPlaceIcon from './rating_icons/ThirdPlace.png';
import MiddleCoin from './rating_icons/middle_coin.png';



const ThirdPlace = ({user_name, user_money, user_image}) => {
   return (
      <div className='not_first_place third'> 

        <img src={user_image} alt='user icon' className='middle_user_icon' />
        <img src={ThirdPlaceIcon} alt='2nd place' className='user_place' />
        <p className='user_name'>{user_name}</p>
        <div className='user_money_container'>
          <p className='user_money user_money_3rd'>{user_money}</p>
          <img src={MiddleCoin} alt='coin' />
        </div>  

      </div>
   );
}

export default ThirdPlace;