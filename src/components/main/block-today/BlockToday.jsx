import React from 'react'
import './style.css'

const BlockToday = ( {weather, weatherDay} ) => {
const icon = `images/${weatherDay.icon}.svg`

  return (
    <div className='BlockToday'>
      <div className="Bt-wrap-left">
        <div>
          <p className='Bt-address'>{weather.address}</p>  
          <p className='Bt-cloudcover'>Chance of rain: {weatherDay.cloudcover} %</p>  
        </div>
        <p className='Bt-temp'>{weatherDay.temp}°</p>  
      </div>
      <div className="Bt-wrap-right">
        <div className="Bt-icon">
        <img src={icon} alt="" />
        </div>
      </div>
      </div> 
  )
}

export default BlockToday
