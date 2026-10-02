import React, { useState, useEffect, useCallback } from 'react';
import './Game.css';

    // Fisher-Yates Shuffle Algorithm
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Check if the puzzle is solvable
    const isSolvable = (tiles) => {
      let inversions = 0;
      for (let i = 0; i < tiles.length - 1; i++) {
        for (let j = i + 1; j < tiles.length; j++) {
          if (tiles[i] && tiles[j] && tiles[i] > tiles[j]) inversions++;
        }
      }
      return inversions % 2 === 0;
    };

    // Check if the puzzle is in a winning state
    const isComplete = (tiles) => {
      for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] !== i + 1) return false;
      }
      return true;
    };

const Game = () => {
    const size = 3; // 3x3 puzzle
    const totalTiles = size * size;
    const [tiles, setTiles] = useState([]);
    const [win, setWin] = useState(false);

    // Shuffle tiles and start a new game
    const resetGame = useCallback(() => {
      let newTiles = Array.from({ length: totalTiles }, (_, i) => i);
      do {
        newTiles = shuffleArray(newTiles);
      } while (!isSolvable(newTiles) || isComplete(newTiles));
      setTiles(newTiles);
      setWin(false);
    }, [totalTiles]);

    useEffect(() => {
      resetGame();
    }, [resetGame]);

    // Move tile to empty space
    const handleTileClick = (index) => {
      const emptyIndex = tiles.indexOf(0);
      const rowDistance = Math.abs(Math.floor(index / size) - Math.floor(emptyIndex / size));
      const columnDistance = Math.abs(index % size - emptyIndex % size);
      const isAdjacent = rowDistance + columnDistance === 1;

      if (isAdjacent) {
        const newTiles = [...tiles];
        [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
        setTiles(newTiles);
        if (isComplete(newTiles)) setWin(true);
      }
    };

    return (
      <div>
        <center>
          <div
            style={{
              backgroundImage: `url(https://www.wallpapertip.com/wmimgs/96-964216_biohazard-symbol-wallpaper-10778-green-biohazard-sign.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%',
              color: 'yellowgreen',
            }}
          >
            <div className="puzzle-container">
              <h1>PUZZLE GAME</h1>
              {win && <p className="win-message">You Win!</p>}
              <div className="puzzle-grid">
                {tiles.map((tile, index) => (
                  <div
                    key={index}
                    className={`tile ${tile === 0 ? 'empty' : win ? 'win' : ''}`}
                    onClick={() => handleTileClick(index)}
                  >
                    {tile !== 0 && tile}
                  </div>
                ))}
              </div>
              <button onClick={resetGame} className="reset-button">Reset Game</button>
            </div>
          </div>
        </center>
      </div>
    );
};

export default Game;
