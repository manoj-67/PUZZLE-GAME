import React from 'react'
import { useState } from 'react';

const User = () => {
    const[count,setCount]=useState(0);
    const[name,setName]=useState("THE FORCE");
    const[bgcolor,setColor]=useState("red");
    const add=()=>{
        setCount((count)=>count+1);
    }
    const sub=()=>{
        setCount((count)=>count-1);
    }
    const change=(event)=>{
        setName(event.target.value);
    }
    const mouseover=()=>{
        setColor("blue");
    }
    const mouseout=()=>{
        setColor("red");
    }
  return (
    <div>
        <center>
           <button style={{backgroundColor:bgcolor}} onMouseOver={mouseover} onMouseOut={mouseout} onClick={add}>+</button>
           <h1>{count}</h1>
           <button onClick={()=>setCount(count=>count-1)}>-</button>
           <br></br>
           <input type='text' onChange={change} value={name}></input>
           <h1>{name}</h1>
        </center>
    </div>
  )
}

export default User