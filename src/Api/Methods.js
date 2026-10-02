import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Methods = () => {
    const[name,setName]=useState([]);
    const[user,setuser]=useState('')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/7').then((a)=>{
            console.log(a.data);
            setName(a.data);

})
 },[]);
    const handlechange=(e)=>{
        setuser(e.target.value)
    };
    const handlepost=()=>{
        axios.post('https://jsonplaceholder.typicode.com/users',{name:user}).then((res)=>{
            console.log(res.data);
            setName([...name,res.data])
        })
    }
    const handleput=()=>{
        axios.put('https://jsonplaceholder.typicode.com/users/7',{name:user}).then((res)=>{
            console.log(res.data);
            setName(res.data)
        })
    }
    const handledel=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/users/7',{name:user}).then((res)=>{
            console.log(res.data);
            setName(res.data)
        })
    }

  return (
    <div>
        <div>
            <input type='text' 
            placeholder='Enter ur Name'
            value={user}
            onChange={handlechange}/>
            <button onClick={handlepost}>post</button>
            <button onClick={handleput}>put</button>
            <button onClick={handledel}>delete</button>
            {name.name}
        </div>
        {/* <div>
            {
                name.map((value,index)=>(
                    <h1 key={index}>{value.name}</h1>
                ))
            }
           
        </div> */}
    </div>
  )
}

export default Methods