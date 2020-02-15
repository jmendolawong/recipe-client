import React, { Component } from 'react'
import './Registration.css'

export default class Registration extends Component {


  handleSubmit = event => {
    event.preventDefault()
    console.log('Registration submitted')
  }

  render() {

    return (
      <div className='registration-form'>
        <h3>Sign me up</h3>
        <form
          className="signup-form"
          onSubmit={this.handleSubmit}>
          <div className='inputs'>
            <label htmlFor="username">Email </label>
            <input type="text" name="username" id="username" />
          </div>
          <div className='inputs'>
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="password" />
          </div>
          <button className='btn' type="submit">Satisfy my tastebuds</button>
        </form>
      </div >
    );
  }
}