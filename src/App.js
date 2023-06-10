import { useState } from 'react';
import Find from './Components/Find';
import Weather from './Components/Current-Weather/Weather';
import {WEATHER_API_URL,WEATHER_API_KEY} from './api/api'
import './App.css';
import ForeCast from './Components/ForeCast/ForeCast'
function App() {
  const [currentWeather,setCurrentWeather] = useState(null)
  const [foreCastWeather,setForeCastWeather] = useState(null)
  const handleChange = (searchData) =>{
    // console.log("SearchData",searchData)
    const [lat,lon] =  searchData.value.split(" ")
    const currentWeatherFetch  = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const foreCastFetch  = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,foreCastFetch])
      .then(async(response)=>{
        const weatherResponse = await response[0].json();
        const foreCastResponse = await response[1].json();

        setCurrentWeather({city:searchData.label, ...weatherResponse})
        setForeCastWeather({city:searchData.label, ...foreCastResponse})
      })
      .catch(error=>console.log(error))

  } 

    console.log("weather",currentWeather)
    console.log("forecast",foreCastWeather)
  return (
    <div className="App">
      <Find onSearchChange={handleChange}/>
      {currentWeather && <Weather data={currentWeather} />}
      {foreCastWeather && <ForeCast data={foreCastWeather} />}
    </div>
  );
}

export default App;
