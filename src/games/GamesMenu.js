import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './GamesMenu.css';
import WheelIcon from './games_icons/wheel.svg';
import TowerIcon from './games_icons/tower.svg';
import SlotsIcon from './games_icons/slots.svg';
import CrashIcon from './games_icons/crash.svg';
import LuckyJetIcon from './games_icons/jet.svg';
import GameItem from './games_components/GamesItem.js';
import GameWheel from './games_components/GameWheel/GameWheel.js';
import GameTower from './games_components/GameTower/GameTower.js';
import GameSlots from './games_components/GameSlots/GameSlots.js';
import GameCrash from './games_components/GameCrash/GameCrash.js';
import GameDouble from './games_components/GameDouble/GameDouble.js';
import GameJetz from './games_components/GameJetz/GameJetz.js';


const GamesMenu = () => {
   const [isOpenWheel, setIsOpenWheel] = useState(false);
   const [isOpenSlots, setIsOpenSlots] = useState(false);
   const [isOpenTower, setIsOpenTower] = useState(false);
   const [isOpenCrash, setIsOpenCrash] = useState(false);
   const [isOpenDouble, setIsOpenDouble] = useState(false);
   const [isOpenJetz, setIsOpenJetz] = useState(false);


   const handleOpenSlots = () => {
      setIsOpenSlots(true);
   }

   const handleCloseSlots = () => {
      setIsOpenSlots(false);
   }


   const handleOpenTower = () => {
      setIsOpenTower(true);
   }

   const handleCloseTower = () => {
      setIsOpenTower(false);
   }


   const handleOpenWheel = () => {
      setIsOpenWheel(true);
   }

   const handleCloseWheel = () => {
      setIsOpenWheel(false);
   }


   const handleOpenCrash = () => {
      setIsOpenCrash(true);
   }

   const handleCloseCrash = () => {
      setIsOpenCrash(false);
   }


   const handleOpenDouble = () => {
      setIsOpenDouble(true);
   }

   const handleCloseDouble = () => {
      setIsOpenDouble(false);
   }


   const handleOpenJetz = () => {
      setIsOpenJetz(true);
   }

   const handleCloseJetz = () => {
      setIsOpenJetz(false);
   }


  return (
    <div className='GamesMenu'>
      <div className='menu__display' id='menu__display'>
        <h2 className='games_menu__title'>Games</h2>

        <div className='games_container'>
          <ul className='games_row'>
            <li className='games_row_item' onClick={handleOpenWheel}>
              <GameItem
                gameImage={WheelIcon}
                gameName='wheel'
              />
            </li>
            <li className='games_row_item' onClick={handleOpenTower}>
              <GameItem
                gameImage={TowerIcon}
                gameName='tower'
              />
            </li>
            <li className='games_row_item' onClick={handleOpenSlots}>
              <GameItem
                gameImage={SlotsIcon}
                gameName='slots'
              />
            </li>
          </ul>

          <ul className='games_row'>
            <li className='games_row_item' onClick={handleOpenCrash}>
              <GameItem
                gameImage={CrashIcon}
                gameName='crash'
              />
            </li>
            <li className='games_row_item' onClick={handleOpenDouble}>
              <GameItem
                gameImage={CrashIcon}
                gameName='double'
              />
            </li>
            <li className='games_row_item' onClick={handleOpenJetz}>
              <GameItem
                gameImage={LuckyJetIcon}
                gameName='jetz'
              />
            </li>
          </ul>
        </div>

        <button className='games_back_button' onClick={() => window.location.href = '../App.js'} id='openMenuBtn'>Back</button>
      </div>

      <CSSTransition
        in={isOpenWheel}
        timeout={300}
        classNames="Game"
        unmountOnExit
      >
        <GameWheel isOpen={isOpenWheel} onClose={handleCloseWheel} />
      </CSSTransition>

      <CSSTransition
        in={isOpenTower}
        timeout={300}
        classNames="Game"
        unmountOnExit
      >
        <GameTower isOpen={isOpenTower} onClose={handleCloseTower} />
      </CSSTransition>

      <CSSTransition
        in={isOpenSlots}
        timeout={300}
        classNames="Game"
        unmountOnExit
      >
        <GameSlots isOpen={isOpenSlots} onClose={handleCloseSlots} />
      </CSSTransition>

      <CSSTransition
        in={isOpenCrash}
        timeout={300}
        classNames="Game"
        unmountOnExit
      >
        <GameCrash isOpen={isOpenCrash} onClose={handleCloseCrash} />
      </CSSTransition>

      <CSSTransition
        in={isOpenDouble}
        timeout={300}
        classNames="Game"
        unmountOnExit
      >
        <GameDouble isOpen={isOpenDouble} onClose={handleCloseDouble} />
      </CSSTransition>

      <CSSTransition
        in={isOpenJetz}
        timeout={300}
        classNames="Game"
        unmountOnExit
      >
        <GameJetz isOpen={isOpenJetz} onClose={handleCloseJetz} />
      </CSSTransition>

    </div>
  );
}

export default GamesMenu;
