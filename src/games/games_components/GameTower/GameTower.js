import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GameTower.css';
import BackIcon from '../GamesImages/back.svg';
import SlotsIcon from '../GamesImages/tower.svg';

const GameTower = ({ isOpen, onClose }) => {
   return (
      <CSSTransition
         in={isOpen}
         timeout={300}
         classNames="Game"
         unmountOnExit
      >
         <div className='Game'>

            <div className='header__container'>
               <div className='game_header'>
                  <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
                  <h2 className='game__title'>Game Tower</h2>
                  <img alt='game icon' src={SlotsIcon} className='GameIcon bounce' />
               </div>
               <p className='header_balance_display'>balance: 10000000</p>
            </div>
            
            <div className='game__content'>
               <div className='tower__gameplay'>
                  <h2 className='tower__title'>Select difficulty level</h2>
                  <div className='tower__difficult'>
                     <button className='difficult__button difficult__button_1'>Easy</button>
                     <button className='difficult__button'>Medium</button>
                     <button className='difficult__button'>Hard</button>
                     <div className='tower_bonuses'>
                        <ul className='t_bonuses_list'>
                           <li className='t_b_list_item'>
                              <p className='t_b_l_item_lvl'>1 lvl</p>
                              <p className='t_b_l_item_bonus'>x1.9</p>
                           </li>
                           <li className='t_b_list_item'>
                              <p className='t_b_l_item_lvl'>2 lvl</p>
                              <p className='t_b_l_item_bonus'>x3.8</p>
                           </li>
                           <li className='t_b_list_item'>
                              <p className='t_b_l_item_lvl'>3 lvl</p>
                              <p className='t_b_l_item_bonus'>x7.6</p>
                           </li>
                           <li className='t_b_list_item'>
                              <p className='t_b_l_item_lvl'>4 lvl</p>
                              <p className='t_b_l_item_bonus'>x15.2</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className='input__container'>
                  <input type='number' placeholder='Your bet' className='Game_input'></input>
                  <button className='tower_bet_button'>x2</button>
                  <button className='tower_bet_button'>/2</button>
               </div>
               <button className='tower_button'>go</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameTower;