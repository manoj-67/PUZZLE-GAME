import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
    const nav=useNavigate();

  const handleGame=()=>{
    nav('/Game')
  }
  const handleloginn=()=>{
    nav('/Loginn')
  }
  const handleA=()=>{
    nav('/Aboutus')
  }

  const handleHelp=()=>{
    nav('/Help')
  }

   
  return (
    
       < div style={{
        backgroundImage: `url(https://wallpaperswide.com/download/bald_eagle_art-wallpaper-3440x1440.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        color:'yellow',
      }}>        
        <center>
        <div > 
            <h1>PUZZLE GAME</h1>
            <div className="menu">
                <button onClick={handleGame}>PLAY</button>
                <br></br>
                <br></br>
                <button onClick={handleA}>About us</button>
                <br></br>
                <br></br>
                <button onClick={handleHelp}>Help</button>
                <br></br>
                <br></br>
                <button onClick={handleloginn}>Logout</button>
                <br></br>
                <br></br>
                       </div>    
                <div className="para">
                    <h1>CONGRATULATION TO WIN</h1>
                    <p>THE INTRESTING GAME</p>
                </div>
                <br></br>
                <br></br>
                <p><button><a href="/Loginn">Back</a></button></p>
                
                
                    </div>
        </center>
    
    </div>
  )
}

export default Home1
