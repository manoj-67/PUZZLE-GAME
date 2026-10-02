import React from 'react'

const Comp_B = (props) => {
  return (
    <div><h1>This is Child
        </h1>
         <h1>Datas from parent:{props.data1}</h1>
         <h1>Datas from parent:{props.data2}</h1>
         <h1>Datas from parent:{props.data3}</h1>
    </div>
  )
}

export default Comp_B