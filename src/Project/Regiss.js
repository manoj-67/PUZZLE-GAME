import React from 'react'
import { useNavigate } from 'react-router-dom'

const Regiss = () => {
  const nav=useNavigate();
  const handleloginn=()=>{
    nav('/Loginn')
  }
  let imageStyle = {
    height: "1300px",
    width: "1500px",
    backgroundImage:'url("https://getwallpapers.com/wallpaper/full/a/c/a/736427-free-download-eagle-wallpaper-1920x1080-hd.jpg")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "black", 
 }
 
  return (
    <div style={{backgroundColor:'black'}}>
     
        <center>
         <div className = "image" style = {imageStyle}>
           <br></br>
        <br></br>
            <h1>REGISTRATION</h1>
            <br></br>
            <br></br>
              <form>
                <table>
                <tbody><tr>
                <th><label>NAME :</label></th>
                <td><input></input></td>
                </tr>
                <tr>
                <th><label>PHONE NUMBER:</label></th>
                <td><input></input><br></br></td>
                </tr>
                <tr>
                <th><label>PASSWORD:</label></th>
                <td><input></input><br></br></td>
                </tr></tbody>
                </table>
                </form>
                <button onClick={handleloginn}>SIGN IN</button>
                <br></br>
                <p>Already have an account?<a href="/Loginn">Login here</a></p>
              </div>  
            
        </center>
        
    </div>
    
  )
}

export default Regiss
