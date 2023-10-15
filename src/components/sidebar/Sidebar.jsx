import React from 'react'
import  './style.css'
import {FaRegMap, FaWind} from 'react-icons/fa'
import {MdMenu, MdOutlineSettingsInputComponent} from 'react-icons/md'
import {TiWeatherWindyCloudy} from 'react-icons/ti'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <nav>
        <ul>
          <li className='Logo'>
            <FaWind/>
          </li>
          <li className='Active'>
            <TiWeatherWindyCloudy/>
            <p>Weater</p>
          </li>
          <li>
            <MdMenu/>
            <p>Cities</p>
          </li>
          <li>
            <FaRegMap/>
            <p>Map</p>
          </li>
          <li>
            <MdOutlineSettingsInputComponent/>
            <p>Settings</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
