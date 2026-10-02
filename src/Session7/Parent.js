  import React, { Component } from 'react'
  import Child from './Child'
  export class Parent extends Component {
      state={
          num:0,
          data:""
      }
      handleAdd=()=>{
          this.setState({num:this.state.num+1})
      } 
      handleSub=()=>{
          this.setState({num:this.state.num-1})
      } 
      handleChange=(e)=>{
        this.setState({data:e.target.value})
      }
      render() {
      return (
        <div>
          <h1>Parent Component</h1>
          <button onClick={this.handleAdd}>Click</button>
          <input onChange={this.handleChange}></input>
          <Child value={this.state.num} value1={this.state.data}/>
        </div>
      )
    }
  }

  export default Parent