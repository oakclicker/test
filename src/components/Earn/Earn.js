import React from 'react';
import './Earn.css';
import IntroIcon from './earn_icons/Earn_main_icon.png';
import Calendar from './earn_icons/calendar.png';
import SmallCoin from './earn_icons/small_coin.png';
import ArrowRight from './earn_icons/arrow_to_right.svg';
import Telegram from './earn_icons/tgico.png';
import Twitter from './earn_icons/xcom.png';
import VK from './earn_icons/vk.png';


const Earn = () => {
  return (
    <div className='daily'>
      <div className='intro_header'>
        <img src={IntroIcon} alt='Intro Coin' className='intro_icon' />
        <h2 className='intro_title'>Earn more OAK</h2>
      </div>

      <div className='earn__container'>
        <h3>Daily tasks</h3>

        <h className='daily_earn'>
          <img src={Calendar} alt='Calendar' className='calendar_img' />
          <div className='task_text'>
            <p className='task_name'>Daily reward</p>
            <p className='task_price'>
              <img src={SmallCoin} alt='small coin' className='small_coin' />
              <p>+5 450 000</p>
            </p>
          </div>
          <p><h><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></h></p>
        </h>
      </div>
      
      <div className='earn__container'>
        <h3>Tasks list</h3>

        <div className='task1'>
          <h className='task_list'>
            <img src={Telegram} alt='Calendar' className='task_img' />
              <div className='task_text'>
                <p className='task_name'>Subscribe Channel</p>
                <p className='task_price'>
                <img src={SmallCoin} alt='small coin' className='small_coin' />
                <p>+5 450 000</p>
                </p>
              </div>
                <p><h><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></h></p>
                </h>
          </div>

        <div className='task2'>
          <h className='task_list'>
            <img src={Telegram} alt='Calendar' className='task_img' />
              <div className='task_text'>
                <p className='task_name'>Subscribe Group</p>
                <p className='task_price'>
                <img src={SmallCoin} alt='small coin' className='small_coin' />
                <p>+5 450 000</p>
                </p>
              </div>
                <p><h><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></h></p>
                </h>
          </div>
          
          <div className='task3'>
          <h className='task_list'>
            <img src={Twitter} alt='Calendar' className='task_img' />
              <div className='task_text'>
                <p className='task_name'>Subscribe Twitter</p>
                <p className='task_price'>
                <img src={SmallCoin} alt='small coin' className='small_coin' />
                <p>+5 450 000</p>
                </p>
              </div>
                <p><h><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></h></p>
                </h>
          </div>
          
          <div className='task4'>
          <h className='task_list'>
            <img src={VK} alt='Calendar' className='task_img' />
              <div className='task_text'>
                <p className='task_name'>Subscribe Vk</p>
                <p className='task_price'>
                <img src={SmallCoin} alt='small coin' className='small_coin' />
                <p>+5 450 000</p>
                </p>
              </div>
                <p><h><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></h></p>
                </h>
          </div>
          
      </div>
      
    </div>
  );
}

export default Earn;
