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

            <div className='game_header'>
               <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
               <h2 className='game__title'>Game Tower</h2>
               <img alt='game icon' src={SlotsIcon} className='GameIcon' />
            </div>
            
            
            <div className='tower__content'>
               <p>Tower</p>
               <div className='tower__gameplay'>
                  <h2 className='tower__title'>Select difficulty level</h2>
                  <div className='tower__difficult'>
                     <button className='difficult__button difficult__button_1'>Easy</button>
                     <button className='difficult__button'>Medium</button>
                     <button className='difficult__button'>Hard</button>
                  </div>
               </div>
               <div className='tower__input__container'>
                  <input type='number' placeholder='Your bet' className='tower_input'></input>
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