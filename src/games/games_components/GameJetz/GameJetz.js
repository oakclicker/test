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

            <div className='game_header'>
               <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
               <h2 className='game__title'>Game Jetz</h2>
               <img alt='game icon' src={SlotsIcon} className='GameIcon' />
            </div>
            
            
            <div className='jetz__content'>
               <p>Jetz</p>
               <div className='jetz__gameplay'>
                  <p>это контейнер</p>
               </div>
               <button className='jetz_button'>Jetz</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameJetz;