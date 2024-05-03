import React from 'react';
import './Earn.css';
import IntroIcon from './earn_components/earn_icons/Earn_main_icon.png';
import Calendar from './earn_components/earn_icons/calendar.png';
import SmallCoin from './earn_components/earn_icons/small_coin.png';
import ArrowRight from './earn_components/earn_icons/arrow_to_right.svg';
import EarnTask from './earn_components/EarnTask.js';

const Earn = () => {
  return (
    <div>
      <div className='intro_header'>
        <img src={IntroIcon} alt='Intro Coin' className='intro_icon' />
        <h2 className='intro_title'>Earn more OAK</h2>
      </div>

      <div className='earn__container'>
        <h3>Daily tasks</h3>

        <a className='daily_earn' >
          <img src={Calendar} alt='Calendar' className='calendar_img' />
          <div className='task_text'>
            <p className='task_name'>Daily reward</p>
            <p className='task_price'>
              <img src={SmallCoin} alt='small coin' className='small_coin' />
              <p>+5 450 000</p>
            </p>
          </div>
          <p></p>
          <a>
              <img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" />
          </a> 
        </a>

      </div>
      
      <div className='earn__container'>
        <h3>Tasks list</h3>

        <EarnTask />
        <EarnTask />
        <EarnTask />
        <EarnTask />
      </div>
      
    </div>
  );
}

export default Earn;
