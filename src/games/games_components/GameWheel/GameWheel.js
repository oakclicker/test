import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GameWheel.css';
import BackIcon from '../GamesImages/back.svg';
import SlotsIcon from '../GamesImages/wheel.svg';

const GameWheel = ({ isOpen, onClose }) => {
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
               <h2 className='game__title'>Game Wheel</h2>
               <img alt='game icon' src={SlotsIcon} className='GameIcon' />
            </div>
            
            
            <div className='wheel__content'>
               <p>Wheel</p>
               <div className='wheel__gameplay'>
                  <p>это контейнер где будет Крутиться колесо</p>
               </div>
               <button className='wheel_button'>Roll</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameWheel;