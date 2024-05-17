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

            <div className='game_header'>
               <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
               <h2 className='game__title'>Game Double</h2>
               <img alt='game icon' src={SlotsIcon} className='GameIcon' />
            </div>
            
            
            <div className='double__content'>
               <p>Double</p>
               <div className='double__gameplay'>
                  <p>это контейнер где будет спин слотов</p>
               </div>
               <button className='spin_button'>double</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameDouble;