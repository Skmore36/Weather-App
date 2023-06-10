import React from 'react'
import './Weather.css'
const Weather = ({data}) => {
  return (
    <div className='weather'>
        <div className="top">
            <div className='weather-details'>
                <div className="city">{data.city}</div>
                <div className="weather-description">{data.weather[0].description}</div>
            </div>
            <div className="image">
                <img className='weather-icon' src={`icons/${data.weather[0].description}.png`} alt='weather' height={100} width={100}></img>
            </div>
        </div>
        <div className='bottom'>
            <p className='temperature'> {Math.round(data.main.temp)}°C</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label">Details</span>
                </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">{Math.round(data.main.pressure)}hPa</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Weather