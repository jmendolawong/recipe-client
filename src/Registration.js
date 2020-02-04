import React from 'react'

export default function Registration() {
  return (
    <div className='registration-form'>
      <h3>Sign me up</h3>
      <form className="signup-form">
        <div className='inputs'>
          <label htmlFor="username">Email</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className='inputs'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Satisfy my tastebuds</button>
      </form>
    </div >
  );
}