import React from 'react';
import './Mine.css';
import SmallCoin from './mine_components/mine_icons/small_coin.png';
import MainCoin from './mine_components/mine_icons/Main_coin.png';
import MineItem from './mine_components/Item.js';

const Mine = () => {
  return (
    <div className='Mine'>

      <div className='mine_header'>
        <div className='mine_header_element'>
          <p>Profit per click</p>
          <div className='mine_header_text'>
            <img src={SmallCoin} alt='Coin' />
            <p>+15,3</p>
          </div>
        </div>

        <div className='mine_header_element'>
          <p>Profit per hour</p>
          <div className='mine_header_text'>
            <img src={SmallCoin} alt='Coin' />
            <p>+15,3</p>
          </div>
        </div>
      </div>

      <p className="balance">
        <p className='balance_counter'>10 500,00 </p>
        <img src={MainCoin} alt='coin' />
      </p>


      <div className='scroll'>
        <div className='power_section scroll'>
          <h3 className='mine_section_name'>Power</h3>

          <MineItem />
          <MineItem />
          <MineItem />
        </div>

        <div className='power_section last_power_section'>
          <h3 className='mine_section_name'>Mining</h3>

          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
          <MineItem />
        </div>
      </div>

    </div>
  );
}

export default Mine;
