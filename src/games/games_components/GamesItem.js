import React from 'react';
import '../GamesMenu.css';


const GameItem = ({ gameImage, gameName }) => {
   return (

      <div className='games_list_item'>

         <img src={gameImage} alt='wheel' className='game_icon' />
         <p className='game_name'>{gameName}</p>

      </div>

   );
}

export default GameItem;