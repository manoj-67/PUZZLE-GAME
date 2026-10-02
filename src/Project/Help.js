// Help.js
import React from 'react';

const Help = () => {
    return (
    
        <div className="help-section">
            <center>
            <h2>Help</h2>
            <h3>How to Play</h3>
            <p>To win the sliding puzzle game, rearrange the tiles in numerical order or restore the image by sliding tiles into the empty space. Only tiles adjacent to the empty space can move.</p>
            <h3>Tips for Solving the Puzzle</h3>
            <ul>
                <li><strong>Start with the Top Row:</strong> Arrange the top row first, then move down.</li>
                <li><strong>Work with Smaller Groups:</strong> Focus on two or three tiles at a time.</li>
                <li><strong>Plan Ahead:</strong> Make sure your moves set up the next pieces.</li>
            </ul>
            <h3>Troubleshooting</h3>
            <p>If a tile isn’t moving, make sure it’s next to the empty space. If you're stuck, click the "Reset Game" button to start a new puzzle.</p>
            <h3>Frequently Asked Questions</h3>
            <p><strong>Q: How can I reset the puzzle if I'm stuck?</strong></p>
            <p>A: Click "Reset Game" to shuffle the tiles and start over.</p>
            <p><strong>Q: Can I play multiple games at once?</strong></p>
            <p>A: Yes! You can play two games on this page. Work on both puzzles at your own pace.</p>
            <h3>Need More Help?</h3>
            <p>Contact us if you have further questions or issues. Happy puzzling!</p>
            </center>
        </div>
       
    );
};

export default Help;
