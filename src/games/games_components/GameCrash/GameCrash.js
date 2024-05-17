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

            <div className='game_header'>
               <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
               <h2 className='game__title'>Game Crash</h2>
               <img alt='game icon' src={SlotsIcon} className='GameIcon' />
            </div>
            
            
            <div className='crash__content'>
               <p>Crash</p>
               <div className='crash__gameplay'>
                  <p>это контейнер</p>
               </div>
               <button className='crash_button'>Roll</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameCrash;