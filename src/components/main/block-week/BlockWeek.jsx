import React from 'react'
import './style.css'

const BlockWeek = ({weatherWeek}) => {
  
  const weekWeather = weatherWeek.slice(0,9)
  
  // console.log(weekWeather)
  return (
    <div className='BlockWeek'>
      <p className='Bw-title'>9-DAY FORECAST</p>
      <div className="Bw-weather-week">
        {
          weekWeather.map((item,index) => (
            <div className='Bw-weather-blocks' key={index}>
                <div className="Bw-data">{item.datetime}</div>
                <div className="Bw-icon">
                  <img src={`images/${item.icon}.svg`} alt="" />
                  <p>{item.icon}</p>
                </div>
                <div className="Bw-temp">{item.tempmax}°/{item.tempmin}°</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BlockWeek
