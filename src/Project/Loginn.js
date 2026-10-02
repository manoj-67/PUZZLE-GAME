import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react'

const Loginn = () => {
    const[user,SetUser]=useState("")
    const[pass,SetPass]=useState("")
    const[mail,SetMail]=useState("")

    const [nameerror,setNameerror] = useState(false);
    const [mailerror,setMailerror] = useState(false);
    const [passworderror,setPassworderror] = useState(false);

    const handlechange1=(e)=>{

        SetUser(e.target.value)
    }
    const handlechange2=(e)=>{
        SetPass(e.target.value)
    }
    const handlechange3=(e)=>{
        SetMail(e.target.value)
    } 
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        const invalidName = user.trim().length < 5;
        const invalidPassword = pass.length < 8;
        const invalidMail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.trim());

        setNameerror(invalidName);
        setPassworderror(invalidPassword);
        setMailerror(invalidMail);

        if (!invalidName && !invalidPassword && !invalidMail) {
            nav("/Home1");
        }
    }
  
  const nav=useNavigate();  
    
  
    let imageStyle1 = {
      height: "1200px",
      width: "1500px",
      backgroundImage:'url("https://moewalls.com/wp-content/uploads/2023/10/eagle-thumb.jpg")', 
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      color: "white", 
   }
  
  return (
    <div style={{backgroundColor:"black"}}>

      <center>
    <div className = "image2" style = {imageStyle1}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit} noValidate>
        <center>
    <label>Username</label>   <br></br>
    <input type="text" placeholder='Username'  style={{margin:"10px 0",border:"2px solid black",borderRadius:"8px"}} onChange={handlechange1} ></input><br></br>
    {nameerror && <p role="alert" style={{color:"red"}}>Username must contain at least 5 characters.</p> }
    <label>Password</label> <br></br>       
    <input type='password' placeholder='Password'  style={{margin:"10px 0",border:"2px solid black",borderRadius:"8px"}} onChange={handlechange2}></input><br></br>
    {passworderror && <p role="alert" style={{color:"red"}}>Password must contain at least 8 characters.</p> }
    <label>Email</label><br></br>
    <input type='email' placeholder='Enter Your Mail'  style={{margin:"10px 0",border:"2px solid black",borderRadius:"8px"}} onChange={handlechange3}></input><br></br><br></br>
    {mailerror && <p role="alert" style={{color:"red"}}>Enter a valid email address.</p> }
    <button type="submit">LOGIN</button></center>
    <p>Don't have a account?<a href="/">Register here</a></p> 
    </form>
</div>
</center>
</div>
)
}
        

export default Loginn
