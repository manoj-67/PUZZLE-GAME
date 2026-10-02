import React from 'react'

const Child = (props) => {
  return (
    <div><h1>Child Component</h1>
    <h1>Button clicked by {props.value} times</h1>
    <h1>{props.value1}</h1>
    </div>
  )
}

export default Child