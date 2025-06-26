import React from 'react'

const BulbOnOff = ({bulbOnOff}) => {
  return (
    <div>
      {bulbOnOff ? "Bulb is ON" : "Bulb is OFF"}
    </div>
  )
}

export default BulbOnOff

