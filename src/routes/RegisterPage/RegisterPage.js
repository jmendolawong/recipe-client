import React, { Component } from 'react'
import './RegisterPage.css'

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ formSubmitted: true })
  }

  render() {

    return (

      <div className='registration-container'>
        <div className='registration-content'>

          <h2>Registration</h2>
          {this.state.formSubmitted ?
            <p></p>
            :
            <p>Recipe Catalog is currently in beta.<br />Sign up below and we'll notify you when we publicly release</p>
          }
          <div className='registration-form'>
            {this.state.formSubmitted ?
              <div className='signup-form'>
                <p>Thank you for signing up. We will notify you when your account is ready.</p>
              </div>
              :
              <form
                className="signup-form"
                onSubmit={this.handleSubmit}>
                <div className='inputs'>
                  <label htmlFor="username">Email </label>
                  <input
                    type="email" name="username" id="username"
                    placeholder='Your email' required />
                </div>
                <button className='btn' type="submit">Satisfy my tastebuds</button>
              </form>
            }
          </div>
        </div>
      </div>
    );
  }
}