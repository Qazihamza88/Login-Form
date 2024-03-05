import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
         email:"",
         password:"",   
         emailerror:"",
         passworderror:"",
        }
    }
    valid()
    { 
      if(this.state.email.includes("@")&& this.state.password.length<5 )
    {
     this.setState({emailerror:"Invalid Email", passworderror:"less then 5 words in not valid"})
    }
    }
    submit()
    {
        if(this.valid()){
            console.log("valid")
        }

    }

  render() {
    return (
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" 
          onChange={(e)=>{ this.setState({email:e.target.value})}} />
        </div>
        <p>{this.emailerror}</p>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            autoComplete=''
            onChange={(e)=>{ this.setState({password:e.target.value})}}/>
            <p>{this.passworderror}</p>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button onClick={()=>this.submit()} className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <Link to="/Forget">  Forgot Password?</Link>
        </p>
      </form>
    )
  }
}