import React, { Component } from 'react'
import './RegisterPage.css'

export default class RegisterPage extends Component {


  handleSubmit = event => {
    event.preventDefault()
    console.log('Registration submitted')
  }

  render() {

    return (

      <div className='registration-container'>
        <div className='registration-content'>

          <h2>Registration</h2>
          <p>Recipe Catalog is currently in beta.{"\n"}Sign up below and we'll notify you when we publicly release</p>

          <div className='registration-form'>
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
          </div>
        </div>
      </div>
    );
  }
}