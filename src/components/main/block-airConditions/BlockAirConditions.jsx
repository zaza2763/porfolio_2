import React from 'react'
import './style.css'
import { FaThermometerHalf, FaWind } from 'react-icons/fa'

import { MdOutlineWbSunny } from 'react-icons/md'
import { IoIosWater } from 'react-icons/io'

const BlockAirConditions = ({weaterDay}) => {
  console.log(weaterDay)
  return (
    <div className='BlockAirConditions'>
      <div className='Bac-top'>
        <p>AIR CONDITIONS</p>
        <button className='Bac-btn'>See more </button>
      </div>
      <div className='Bac-bot'>
          <div className="Bac-bot-elem">
            <div className="icon">
              <FaThermometerHalf/>
              <p className='Bac-iton-info'>Real Feel<span>{weaterDay.feelslike}°</span></p>
            </div>
            <p></p>
          </div>
          <div className="Bac-bot-elem">
            <div className="icon">
              <FaWind/>
              <p className='Bac-iton-info'>Wind<span>{weaterDay.windspeed} km/h</span></p>
            </div>
            <p></p>
          </div>
          <div className="Bac-bot-elem">
            <div className="icon">
              <IoIosWater/>
              <p className='Bac-iton-info'>Chance of rain<span>{weaterDay.cloudcover}%</span></p>
            </div>
            <p></p>
          </div>
          <div className="Bac-bot-elem">
            <div className="icon">
              <MdOutlineWbSunny/>
              <p className='Bac-iton-info'>UV Index<span>{weaterDay.uvindex}</span></p>
            </div>
            <p></p>
          </div>
      </div>
    </div>
  )
}

export default BlockAirConditions
