import React, { useState } from 'react'

const Newform = () => {
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
        // setusererror(false);
        // setmailerror(false);
        // setpasserror(false);
        if(user===""&&pass===""&&mail===""){
            alert("The input field can't be empty");
        }
        else if(user.length<5){
            setNameerror(true);
        }
        else if(pass.length<8){
            setPassworderror(true);
        }
        else if(mail.length<7){
            setMailerror(true);
        }
    }

  return (
    
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form>
            <center>
        <label>Username</label>   <br></br>
        <input type="text" placeholder='Username'  style={{margin:"10px 0",border:"2px solid black",borderRadius:"8px"}} onChange={handlechange1} ></input><br></br>
        {nameerror && <p style={{color:"red"}}>The username is error</p> }
        <label>Password</label> <br></br>       
        <input type='password' placeholder='Password'  style={{margin:"10px 0",border:"2px solid black",borderRadius:"8px"}} onChange={handlechange2}></input><br></br>
        {passworderror && <p style={{color:"red"}}>The password is error</p> }
        <label>Email</label><br></br>
        <input type='email' placeholder='Enter Your Mail'  style={{margin:"10px 0",border:"2px solid black",borderRadius:"8px"}} onChange={handlechange3}></input><br></br><br></br>
        {mailerror && <p style={{color:"red"}}>The mail is error</p> }
        <button onClick={handleSubmit}>Submit</button></center>
        </form>
    </div>
  )
}

export default Newform