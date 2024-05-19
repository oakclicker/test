import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GameCrash.css';
import BackIcon from '../GamesImages/back.svg';
import SlotsIcon from '../GamesImages/crash.svg';

const GameCrash = ({ isOpen, onClose }) => {
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
                  <h2 className='game__title'>Game Crash</h2>
                  <img alt='game icon' src={SlotsIcon} className='GameIcon' />
               </div>
               <p className='header_balance_display'>balance: 10000000</p>
            </div>
            
            <div className='game__content'>
               <div className='crash_history'>
                  <p>Game history</p>
                  <div className='crash_history_elements'>
                     <p className='c_history_element red'>x25.3</p>
                     <p className='c_history_element orange'>x8</p>
                     <p className='c_history_element green'>x1.7</p>
                     <p className='c_history_element orange'>x11.04</p>
                     <p className='c_history_element red'>x18.2</p>
                     <p className='c_history_element green'>x2.1</p>
                     <p className='c_history_element orange'>x7.2</p>
                     <p className='c_history_element green'>x3.7</p>
                     <p className='c_history_element red'>x46.2</p>
                  </div>
               </div>
               <div className='crash__gameplay'>
                  <p>тут геймплей</p>
               </div>
               <div className='crash_bets'>
                  <div className='crash_bets_container'>
                     <div>
                        <p>Bet</p>
                        <input type='number' placeholder='Your bet' className='Game_input Crash_input'></input>
                     </div>
                     <div className='auto_get_container'>
                        <p>Auto</p>
                        <input type='number' placeholder='Your bet' className='Game_input Crash_input_auto'></input>
                     </div>
                  </div>
               </div>
               <button className='crash_button'>Roll</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameCrash;