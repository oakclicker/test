import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GameDouble.css';
import BackIcon from '../GamesImages/back.svg';
import SlotsIcon from '../GamesImages/double.svg';

const GameDouble = ({ isOpen, onClose }) => {
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
                  <h2 className='game__title'>Game Double</h2>
                  <img alt='game icon' src={SlotsIcon} className='GameIcon' />
               </div>
               <p className='header_balance_display'>balance: 10000000</p>
            </div>
            
            <div className='game__content'>
               <div className='double_history'>
                  <p>Game history</p>
                  <div className='double_history_elements'>
                     <p className='d_history_element'>x2</p>
                     <p className='d_history_element'>x5</p>
                     <p className='d_history_element'>x3</p>
                     <p className='d_history_element'>x2</p>
                     <p className='d_history_element'>x5</p>
                     <p className='d_history_element'>x3</p>
                     <p className='d_history_element'>x2</p>
                     <p className='d_history_element'>x5</p>
                     <p className='d_history_element'>x3</p>
                  </div>
               </div>
               <div className='double__gameplay'>
                  <p>это контейнер где будет игра</p>
               </div>
               <div className='wheel_bet_container'>
                  <input type='number' placeholder='Your bet' className='Game_input'></input>
                  <button className='tower_bet_button'>x2</button>
                  <button className='tower_bet_button'>/2</button>
               </div>
               <div className='double_bet_bonuses'>
                  <button className='d_bet_bonus'>x2</button>
                  <button className='d_bet_bonus'>x3</button>
                  <button className='d_bet_bonus'>x5</button>
               </div>
               <button className='spin_button'>Play</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameDouble;