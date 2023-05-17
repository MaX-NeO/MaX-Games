import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameNav from './Nav/Gamenav';
import { GameAdd } from '../../services/api';

export default function Addgame() {
  const navigate = useNavigate();
  const [game, setGame] = useState({
    gamename: '',
    releaseyear: '',
    gamedeveloper: '',
    gametype: '',
    gameratings: '',
    gameprice:'',
    gamedesc: '',
    gamecover: '',
    coverurl1: '',
    coverurl2: '',
    coverurl3: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    GameAdd(game)
      .then((res) => {
        console.log('Game added successfully:', res.data);

      })
      .catch((err) => {
        console.error('Error adding game:', err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='game-x-main'>
        <GameNav />
        <div className='game-actions'>
          <h1 className="game-page-title">Add Games </h1>
          <div className="data-x-game-container">
                    <form onSubmit={handleSubmit} className='input-group'>
                        <label>
                            Game Name :
                            <input type="text" name="gamename" value={game.gamename} onChange={handleChange} required/>
                        </label>
                        <label>
                            Release Year :
                            <input type="number" name="releaseyear" value={game.releaseyear} onChange={handleChange} required/>
                        </label>
                        <label>
                            Developer :
                            <input type="text" name="gamedeveloper" value={game.gamedeveloper} onChange={handleChange} required/>
                        </label>
                        <label>
                            Type :
                            <input type="text" name="gametype" value={game.gametype} onChange={handleChange} required/>
                        </label>
                        <label>
                            Ratings :
                            <input type="number" name="gameratings" value={game.gameratings} onChange={handleChange} required/>
                        </label>
                        <label>
                            Price :
                            <input type="number" name="gameprice" value={game.gameprice} onChange={handleChange} required/>
                        </label>
                        <label>
                            Describption :
                            <input type="text" name="gamedesc" value={game.gamedesc} onChange={handleChange} required/>
                        </label>
                        <label>
                            Cover Image:
                            <input type="text" name="gamecover" value={game.gamecover} onChange={handleChange} required/>
                        </label>
                        <label>
                            Cover URL 1 :
                            <input type="text" name="coverurl1" value={game.coverurl1} onChange={handleChange} required/>
                        </label>
                        <label>
                            Cover URL 2 :
                            <input type="text" name="coverurl2" value={game.coverurl2} onChange={handleChange} required/>
                        </label>
                        <label>
                            Cover URL 3 :
                            <input type="text" name="coverurl3" value={game.coverurl3} onChange={handleChange} required/>
                        </label>

                        <button type="submit" className='game-nav-button'>Save</button>
                    </form>
                </div>
        </div>
      </div>
    </>
  )
}
