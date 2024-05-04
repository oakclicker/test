import React from 'react';
import { useState } from 'react';
import './Earn.css';
import IntroIcon from './earn_components/earn_icons/Earn_main_icon.png';
import Calendar from './earn_components/earn_icons/calendar.png';
import SmallCoin from './earn_components/earn_icons/small_coin.png';
import ArrowRight from './earn_components/earn_icons/arrow_to_right.svg';
import Telegram from './earn_components/earn_icons/tgico.png';
import Twitter from './earn_components/earn_icons/xcom.png';
import VK from './earn_components/earn_icons/vk.png';
import EarnModal from './earn_components/EarnModal';


const Earn = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className='daily'>
      <div className='intro_header'>
        <img src={IntroIcon} alt='Intro Coin' className='intro_icon' />
        <h2 className='intro_title'>Earn more OAK</h2>
      </div>

      <div className='earn__container'>
        <h3>Daily tasks</h3>

        <a className='daily_earn tasks_link' href='#.' onClick={() => setModalActive(true)}>
          <img src={Calendar} alt='Calendar' className='calendar_img' />
          <div className='task_text'>
            <p className='task_name'>Daily reward</p>
            <p className='task_price'>
              <img src={SmallCoin} alt='small coin' className='small_coin' />
              <p>+5 450 000</p>
            </p>
          </div>
          <p><h><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></h></p>
        </a>
      </div>
      
      <div className='earn__container'>
        <h3>Tasks list</h3>

        <a className='task1 tasks_link' href='https://t.me/oakcrypton'>
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
          </a>

        <a className='task2 tasks_link' href='https://t.me/oakcrypton_chat'>
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
        </a>
          
          <a className='task3 tasks_link' href='#.'>
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
          </a>
          
          <a className='task4 tasks_link' href='#.'>
          <h className='task_list'>
            <img src={VK} alt='Calendar' className='task_img' />
              <div className='task_text'>
                <p className='task_name'>Subscribe Vk</p>
                <p className='task_price'>
                <img src={SmallCoin} alt='small coin' className='small_coin' />
                <p>+5 450 000</p>
                </p>
              </div>
                <p><h><img src={ArrowRight} className='arrow_to_right last_element' alt="Arrow To Right" /></h></p>
                </h>
          </a>
          
      </div>

      <EarnModal active={modalActive} setActive={setModalActive} />

    </div>
  );
}

export default Earn;
