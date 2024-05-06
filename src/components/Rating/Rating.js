import React from 'react';
import './Rating.css';
import User from './rating_components/rating_icons/user.svg';
import FirstPlace from './rating_components/rating_icons/FirstPlace.png';
import SecondPlace from './rating_components/rating_icons/SecondPlace.png';
import ThirdPlace from './rating_components/rating_icons/ThirdPlace.png';
import MiddleCoin from './rating_components/rating_icons/middle_coin.png';
import RatingPlaces from './rating_components/RatingPlaces.js';


const Rating = () => {
  return (
    <div className='Rating'>

      <h2 className='rating_title'>Player Ratings</h2>

      <div className='rating_header'>
        

        <div className='not_first_place second'>
          <img src={User} alt='user icon' className='middle_user_icon' />
          <img src={SecondPlace} alt='2nd place' className='user_place' />
          <p className='user_name'>User 2</p>
          <div className='user_money_container'>
            <p className='user_money user_money_2nd'>10 500,00</p>
            <img src={MiddleCoin} alt='coin' />
          </div>
        </div>

        <div className='first_place'>
          <img src={User} alt='user icon' className='large_user_icon' />
          <img src={FirstPlace} alt='2nd place' className='user_place' />
          <p className='user_name'>User 1</p>
          <div className='user_money_container'>
            <p className='user_money user_money_1st'>10 500,00</p>
            <img src={MiddleCoin} alt='coin' />
          </div>
        </div>

        <div className='not_first_place third'>
          <img src={User} alt='user icon' className='middle_user_icon' />
          <img src={ThirdPlace} alt='2nd place' className='user_place' />
          <p className='user_name'>User 3</p>
          <div className='user_money_container'>
            <p className='user_money user_money_3rd'>9 400,00</p>
            <img src={MiddleCoin} alt='coin' />
          </div>
        </div>

      </div>
      
      <div className='raiting_section'>
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
        <RatingPlaces />
          <div className='rating_places'>
         <p className='player_place'>4</p>
         <img src={User} alt='user' className='player_avatar' />
         <div className='player_place_info'>
            <p className='player_name'>User</p>
            <div className='player_cash'>
               <p>8,500,00</p>
               <img src={MiddleCoin} alt='coin' />
            </div>
         </div>
         <p></p>
    <div className="last_rating"></div>
      </div>

    </div>
  );
}

export default Rating;
