import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GameJetz.css';
import BackIcon from '../GamesImages/back.svg';
import SlotsIcon from '../GamesImages/jet.svg';

const GameJetz = ({ isOpen, onClose }) => {
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
                  <h2 className='game__title'>Game Jetz</h2>
                  <img alt='game icon' src={SlotsIcon} className='GameIcon' />
               </div>
               <p className='header_balance_display'>balance: 10000000</p>
            </div>
            
            
            <div className='game__content'>
               <div  div className='double_history'>
                  <p>Game history</p>
                  <div className='double_history_elements'>
                     <p className='j_history_element blue'>x1.2</p>
                     <p className='j_history_element orange'>x28.1</p>
                     <p className='j_history_element orange'>x7.8</p>
                     <p className='j_history_element blue'>x1.2</p>
                     <p className='j_history_element orange'>x28.1</p>
                     <p className='j_history_element orange'>x7.8</p>
                     <p className='j_history_element blue'>x1.2</p>
                     <p className='j_history_element orange'>x28.1</p>
                     <p className='j_history_element orange'>x7.8</p>
                  </div>
               </div>
               <div className='jetz__gameplay'>
                  <p>тут геймплей</p>
               </div>
               <div className='wheel_bet_container'>
                  <input type='number' placeholder='Your bet' className='Game_input'></input>
                  <button className='tower_bet_button'>x2</button>
                  <button className='tower_bet_button'>/2</button>
                  <input type='number' placeholder='Your bet' className='Game_input second_input'></input>
                  <button className='tower_bet_button'>x2</button>
                  <button className='tower_bet_button'>/2</button>
               </div>
               <button className='jetz_button'>Jetz</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameJetz;