import React from 'react'
import './Note.css'

export default function Note() {
  return (
    <div className='note'>
      <textarea
        rows="15"
        cols="45"
        name="notes"
        id="notes"
        placeholder="Better to use full fat coconut cream">
      </textarea>
    </div>
  )
}