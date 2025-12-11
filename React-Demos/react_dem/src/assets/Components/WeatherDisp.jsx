import React from 'react'

import "./Weatherdisp.css"
function WeatherDisp(props) {
  return (
    <div className='weather-card'>
        <div>
            {props.day}
        </div>
        <div>
            {props.date}
        </div>
        <div>
            <i  className= {props.icon} ></i>
        </div>
        <div >
            {props.type}
        </div>
        <div>
            {props.temp}
        </div>
    </div>
  )
}

export default WeatherDisp