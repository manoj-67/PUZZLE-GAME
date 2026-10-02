import React, { Component } from 'react'

const List1 = () => {
    const arr= ["Chavata","Ranga","Sona","sera"]
    return (
      <div>
        <ol>
            {arr.map((value,index)=>(
             <li key={index}>{value}</li>
            ))}
        </ol>
      </div>
    )
  }


export default List1