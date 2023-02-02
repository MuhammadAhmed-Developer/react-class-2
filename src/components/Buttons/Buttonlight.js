import React from 'react'

export default function Buttonlight(props) {
    // Destructure
    const {bg, icon, text} = props
  return (
    <button className={`m-2 btn btn-${bg ? bg : 'light'}`}><i className = {`me-2  bi bi-${icon}`}></i>{text}</button>
  )
}
