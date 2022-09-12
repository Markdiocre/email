import React, { useState } from "react";
import Home from "./Home";
const nodemailer = require("nodemailer");

class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      server:'',
      port:''
    };
  }

  onChange = e =>{
    console.log(e.target.value);
    this.setState({[e.target.name] : e.target.value})
  }
  
  onSubmit = e =>{
    e.preventDefault();
    console.log("Email:" + this.state.email);
    console.log("Password:" + this.state.password);
    console.log("Server:" + this.state.server);
    console.log("Port" + this.state.port);
    //this.setState({email: "", port: "",password: "",server: ""})
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
      <div className="container m-3">
        <div className="row ">
          <div className="col-4 container-fluid">
            <div className="form-floating mb-3 row">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="d-grid gap-2 row pt-2">
              <button className="btn btn-primary" type="button">Add Email Address</button>
            </div>
            <div className="row pt-2">
              <select className="form-select" multiple aria-label="multiple select example">
              <option >Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="3">Three</option>
              <option value="3">Three</option>
              <option value="3">Three</option>
              <option value="3">Three</option>
              <option value="3">Three</option>

              <option value="3">Three</option>
              </select>
            </div>
            
            <div className="d-grid gap-2 row pt-2">
              <button className="btn btn-danger" type="button">Delete All</button>
            </div>
          </div>
          <div className="col-8 ">
            <div className="row ">
              <div className="col-6">
                <div className="form-floating mb-3 mx-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.server} onChange={this.onChange} name="server"/>
                  <label htmlFor="floatingInput">Server</label>
                  </div>
              </div>
              <div className="col-6 ">
                <div className="form-floating mb-3 mx-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.email} onChange={this.onChange} name="email"/>
              <label htmlFor="floatingInput">Email</label>
            </div>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-6">
                  <div className="form-floating mb-3 mx-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.port} onChange={this.onChange}name="port" />
                    <label htmlFor="floatingInput">Port</label>
                  </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3 mx-3">
                  <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.password} onChange={this.onChange} name="password"/>
                  <label htmlFor="floatingInput">Password</label>
                </div>
              </div>
            </div>
            <div className="row mx-3">
              <div class="form-check ">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Require SSL
                </label>
              </div>
            </div>
            <div className="row ">
              <div className="col-6">
                <div className="form-floating mb-3 mx-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">From Name</label>
                  </div>
              </div>
              <div className="col-6 ">
                <div className="form-floating mb-3 mx-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">From Email</label>
            </div>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-6">
                  <div className="form-floating mb-3 mx-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">To</label>
                  </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3 mx-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Attachment</label>
                </div>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-12 w-100">
                  <div className="form-floating mb-3 mx-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Subject</label>
                  </div>
              </div>
            </div>
            <div className="row pt-2 ">
              <div className="col-12 w-100">
                  <div class="mb-3 mx-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
              </div>
            </div>
            <div className="row pt-2 ">
              <div className="col-8">
                  {/*Status here*/}
              </div>
              <div className="col-4">
                  <div className="d-grid gap-2 row pt-2 mx-3">
                    <button className="btn btn-primary" type="submit">Submit</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
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
