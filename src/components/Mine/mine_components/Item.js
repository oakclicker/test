import React from 'react';
import '../Mine.css';
import Pixar from './mine_icons/Pixar.png';
import SmallCoin from './mine_icons/small_coin.png';
import ArrowRight from './mine_icons/arrow_to_right.svg';

const MineItem = () => {
  return (
    <div className='item_container'>
      <img src={Pixar} alt="pixar" className='item_image' />

      <div className='item_content'>
         <p className='item_name'>Simple pickaxe</p>
         <div className='item_price'>
            <div>
               <p>5 000</p>
               <img src={SmallCoin} alt='coin' />
            </div>
            <p className='item_lvl'>150 lvl</p>
         </div>
      </div>

      <div></div>
      <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
    </div>
  );
}

export default MineItem;
