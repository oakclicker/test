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

            <div className='header__container'>
               <div className='game_header'>
                  <img alt='back' src={BackIcon} className='back_button' onClick={onClose} />
                  <h2 className='game__title'>Game Wheel</h2>
                  <img alt='game icon' src={SlotsIcon} className='GameIcon rotate' />
               </div>
               <p className='header_balance_display'>balance: 10000000</p>
            </div>
            
            
            <div className='wheel__content'>
               <div className='wheel_history'>
                  <p>Game history</p>
                  <div className='wheel_history_elements'>
                     <p className='w_history_element red'>15</p>
                     <p className='w_history_element black'>8</p>
                     <p className='w_history_element black'>17</p>
                     <p className='w_history_element red'>5</p>
                     <p className='w_history_element red'>5</p>
                     <p className='w_history_element black'>17</p>
                     <p className='w_history_element black'>17</p>
                     <p className='w_history_element black'>17</p>
                     <p className='w_history_element black'>17</p>
                  </div>
               </div>
               <div className='wheel__gameplay'>
                  <p>это контейнер где будет Крутиться колесо</p>
               </div>

               <div className='wheel_bets'>
                  <input type='number' placeholder='Your bet' className='Game_input'></input>
                  <button className='tower_bet_button'>x2</button>
                  <button className='tower_bet_button'>/2</button>
                  <ul className='wheel_bets_variations'>
                     <li className='w_b_variation bet_red'>
                        Red (x2)
                     </li>
                     <li className='w_b_variation bet_zero'>
                        0 (x36)
                     </li>
                     <li className='w_b_variation bet_black'>
                        Black (x2)
                     </li>
                  </ul>
                  <ul className='wheel_bets_variations'>
                     <li className='w_b_variation bet_purple'>
                        Even (x2)
                     </li>
                     <li className='w_b_variation bet_green'>
                        Num (x30)
                     </li>
                     <li className='w_b_variation bet_purple'>
                        Odd (x2)
                     </li>
                  </ul>
                  <ul className='wheel_bets_variations'>
                     <li className='w_b_variation bet_zero'>
                        1 - 18 (x2)
                     </li>
                     <li className='w_b_variation bet_zero'>
                        19 - 36 (x2)
                     </li>
                  </ul>
                  <ul className='wheel_bets_variations'>
                     <li className='w_b_variation bet_blue'>
                        1 - 12 (x3)
                     </li>
                     <li className='w_b_variation bet_blue'>
                        13 - 24 (x3)
                     </li>
                     <li className='w_b_variation bet_blue'>
                        25 - 36 (x3)
                     </li>
                  </ul>
               </div>
               
               <button className='wheel_button'>Roll</button>
            </div>

         </div>
      </CSSTransition>
   );
}

export default GameWheel;