import React from 'react';
import '../Rating.css';
import SecondPlaceIcon from './rating_icons/SecondPlace.png';
import MiddleCoin from './rating_icons/middle_coin.png';




const SecondPlace = ({user_name, user_money, user_image}) => {
   return (
      <div className='not_first_place second'>

         <img src={user_image} alt='user icon' className='middle_user_icon' />
         <img src={SecondPlaceIcon} alt='2nd place' className='user_place second_place_icon' />
         <p className='user_name'>{user_name}</p>
         <div className='user_money_container'>
           <p className='user_money user_money_2nd'>{user_money}</p>
           <img src={MiddleCoin} alt='coin' />
         </div>

      </div>
   );
}

export default SecondPlace;