import React from 'react'
import './style.css'

const BlockDetails = ({weatherDayDetals}) => {
  console.log()
const weatherHours = weatherDayDetals.filter((el,index) => (index===3 | index===6 | index===9 | index===12 | index===15 | index===18 | index===21 ))

  return (
    <div className='BlockDetails'>
      <p>TODAY'S FORECAST</p>
      <div className='Bd-items'>
        {
          weatherHours.map(item => (
            
            <div className="Bd-item" key={item.datetime}>
              <p className='Bd-item-time'>{item.datetime.slice(0,5)}</p>
              <div className="Bd-icon">
                <img src={`images/${item.icon}.svg`} alt={item.icon} />
              </div>
              <p className='Bd-temp'>{item.temp}°</p>
            </div>
          ))
          
        }
      </div>
    </div>
  )
}

export default BlockDetails
