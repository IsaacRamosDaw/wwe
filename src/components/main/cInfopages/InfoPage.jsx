import React from 'react'
import './cInfoPages.css'
function InfoPage({title, text, text2, text3}) {
  return (
  <main className="cookies">
    <h2 className="cookies-title">{title}</h2>
    <p className="cookies-text">
      {text}
      <br />
      <br />
      {text2}
      <br />
      <br /> 
      {text3}  
    </p>
  </main>
  )
}

export default InfoPage