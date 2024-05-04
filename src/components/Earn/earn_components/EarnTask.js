import React from 'react';
import '../Earn.css';
import Dialoge from './earn_icons/Dialoge.png';
import SmallCoin from './earn_icons/small_coin.png';
import ArrowRight from './earn_icons/arrow_to_right.svg';

const EarnTask = () => {
  return (
    <div>
      {/* Исправлено: добавлен атрибут href */}
      <a href='#' className='daily_earn'>
        <img src={Dialoge} alt='Calendar' className='calendar_img' />
        <div className='task_text'>
          <p className='task_name'>Daily reward</p>
          <p className='task_price'>
            <img src={SmallCoin} alt='small coin' className='small_coin' />
            <p>+5 450 000</p>
          </p>
        </div>
        {/* Исправлено: добавлен закрывающий тег */}
        <p><a href='#'><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></a></p>
      </a>
    </div>
  );
}

export default EarnTask;
