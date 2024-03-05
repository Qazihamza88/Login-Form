import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 
export default class Forget extends Component {
    // redirectToAnotherRoute = //() => {
    //     this.props.history.push('/sign-in');
    //   }//
    render() {
    return (
      <form>
        <h3>Forget Password</h3>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" autoComplete="new-password"/>
        </div>
        <div className="mb-3">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            autoComplete="new-password"/>
        </div>
        <div className="d-grid">
          <button type='submit' className="btn btn-primary " >
          <Link to="/" style={{color:'white' , textDecoration: 'none'}}> Return To Login</Link>
          </button>
        </div>
      </form>
    )
  }
}