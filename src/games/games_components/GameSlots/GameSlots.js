import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GameSlots.css';
import BackIcon from '../GamesImages/back.svg';
import SlotsIcon from '../GamesImages/slots.svg';

const GameSlots = ({ isOpen, onClose }) => {
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
                  <h2 className='game__title'>Game Slots</h2>
                  <img alt='game icon' src={SlotsIcon} className='GameIcon bounce' />
               </div>
               <p className='header_balance_display'>balance: 10000000</p>
            </div>
            
            
            <div className='game__content'>
               <div className='slots__gameplay'>
                  <p>это контейнер где будет спин слотов</p>
               </div>
               <div className='input__container'>
                  <input type='number' placeholder='Your bet' className='Game_input'></input>
                  <button className='tower_bet_button'>x2</button>
                  <button className='tower_bet_button'>/2</button>
               </div>
               <button className='spin_button'>Spin</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameSlots;