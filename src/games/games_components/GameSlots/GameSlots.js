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

            <div className='game_header'>
               <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
               <h2 className='game__title'>Game Slots</h2>
               <img alt='game icon' src={SlotsIcon} className='GameIcon' />
            </div>
            
            
            <div className='slots__content'>
               <p>Slots</p>
               <div className='slots__gameplay'>
                  <p>это контейнер где будет спин слотов</p>
               </div>
               <button className='spin_button'>Spin</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameSlots;