import React, { useState } from "react";
import Home from "./Home";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      counter : 1,
      a: 0,
      b: 0,
      total: 0
    }

    this.add = this.add.bind(this);
    this.changeA = this.changeA.bind(this);
    this.changeB = this.changeB.bind(this);
  }

  IncrementCounter = (e) =>{
    this.setState((state)=>{
      return {counter: state.counter * 100}
    })
  }

  add=(e)=>{
    e.preventDefault();
    this.setState((state)=>{
      return {total: parseInt(state.a) + parseInt(state.b)}
    })
  }


  changeA=(e)=>{
    this.setState((state)=>{
      return{ a: e.target.value }
    })
  }

  changeB=(e)=>{
    this.setState((state)=>{
      return{ b: e.target.value }
    })
  }

  render(){
    return (
      <div>
        {this.state.total}
        <form onSubmit={this.add}>
          <input defaultValue={this.state.a} onChange={this.changeA} type="number"/>
          <input defaultValue={this.state.b} onChange={this.changeB} type="number"/>

          <button type="submit">Add</button>

        </form>
      </div>
    )
  }

}

// function App(){

//   let a;
//   let b;
//   let total;

//   function add(a,b) {
//     return a + b;
//   }

//   function addAgain(){
//     total = add(a,b)
//   }

//   return (
//     <div>
      
//       <form>
//         <input type="number" value={a} onChange={addAgain()}/>
//         <input type="number" value={b} onChange={addAgain()}/>
//         {total}
//       </form>

//     </div>
//   );
// }

export default App;
