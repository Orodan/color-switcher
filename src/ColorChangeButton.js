import React from 'react'

function ColorChangeButton ({ color, setColor }) {
  return (
    <button className={color} onClick={() => setColor(color)}>red</button>
  )
}

export default ColorChangeButton