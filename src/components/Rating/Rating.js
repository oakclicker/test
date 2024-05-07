import React from 'react';
import './Rating.css';
import RatingPlaces from './rating_components/RatingPlaces.js';
import User from './rating_components/rating_icons/user.svg';
import ThirdPlace from './rating_components/ThirdPlace.js';
import SecondPlace from './rating_components/SecondPlace.js';
import FirstPlace from './rating_components/FirstPlace.js';


const Rating = () => {
  return (
    <div className='Rating'>

      <h2 className='rating_title'>Players Ratings</h2>

      <div className='rating_header'>
        
        
        <SecondPlace
          user_image={User}
          user_name = 'User 2'
          user_money = '9 400,00'
        />

        <FirstPlace
          user_image={User}
          user_name = 'User 1'
          user_money = '10 500,00'
        />

        
        <ThirdPlace
          user_image={User}
          user_name = 'User 3'
          user_money = '8 500,00'
        />
        
      </div>
      
      <div className='raiting_section'>
        <RatingPlaces place="4"  userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="5"  userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="6"  userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="7"  userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="8"  userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="9"  userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="10" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="11" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="12" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="13" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="14" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="15" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="16" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="17" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="18" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="19" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="20" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="21" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="22" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="23" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="24" userName="User 4" userMoney="8 500,00" />
        <RatingPlaces place="25" userName="User 4" userMoney="8 500,00" />


        <div className="last_rating"></div>
      </div>
    </div>
  );
}

export default Rating;
