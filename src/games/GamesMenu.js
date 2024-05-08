import React from 'react';
import './GamesMenu.css';
import WheelIcon from './games_icons/wheel.svg';
import TowerIcon from './games_icons/tower.svg';
import SlotsIcon from './games_icons/slots.svg';
import CrashIcon from './games_icons/crash.svg';
import LuckyJetIcon from './games_icons/jet.svg';
import GameItem from './games_components/GamesItem.js';
import App from '../App.js';



const GamesMenu = () => {

   function addActiveToElement() {
      document.querySelector('.GamesMenu').classList.add('active'); 
   }

   return (

      <div className='GamesMenu'>
         <h2>Games</h2>

         <div className='games_container'>
            <ul className='games_row'>

               <li className='games_row_item'>
                  <GameItem
                     gameImage={WheelIcon}
                     gameName='wheel'
                  />
               </li>

               <li className='games_row_item'>
                  <GameItem
                     gameImage={TowerIcon}
                     gameName='tower'
                  />
               </li>
               
               <li className='games_row_item'>
                  <GameItem
                     gameImage={SlotsIcon}
                     gameName='slots'
                  />
               </li>

            </ul>

            <ul className='games_row'>

            <li className='games_row_item'>
               <GameItem
                  gameImage={CrashIcon}
                  gameName='crash'
               />
            </li>

            <li className='games_row_item'>
               <GameItem
                  gameImage={CrashIcon}
                  gameName='double'
               />
            </li>

            <li className='games_row_item'>
               <GameItem
                  gameImage={LuckyJetIcon}
                  gameName='jetz'
               />
            </li>

            </ul>
         </div>

         <button className='games_back_button' onClick={ () => {
            addActiveToElement();
            setTimeout(() => {
               window.location.href = '/';
           }, 150);
         } } id='openMenuBtn'>Back</button>



         
      </div>

   );
}

export default GamesMenu;