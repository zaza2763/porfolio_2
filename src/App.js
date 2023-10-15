import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import BlockAirConditions from './components/main/block-airConditions/BlockAirConditions';
import BlockDetails from './components/main/block-detailsToday/BlockDetails';
import BlockToday from './components/main/block-today/BlockToday';
import BlockWeek from './components/main/block-week/BlockWeek';
import Search from './components/main/search/Search';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [weather,setWeather] = useState([]);
  const [weatherDay,setWeatherDay] = useState([]);
  const [weatherDayDetals,setWeatherDayDetals] = useState([]);
  const [weatherWeek,setWeatherWeek] = useState([]);

  const [loading,setLoading] = useState(false)

  const [searchCities,setSearchCities] = useState('');
  const [search,setSearch] = useState('Gdansk') ;
  const [error,setError] = useState(false)
 
    useEffect(()=>{
    const SearchCity = async () => {
      setLoading(true)
      setError(false)
     axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=metric&key=EQMXNV2B49WYPUPX6SQM8K5RL&contentType=json`)

     .then((res) =>{
      setWeather((res).data)
      setWeatherDay((res).data.currentConditions)
      setWeatherDayDetals((res).data.days[0].hours)
      setWeatherWeek((res).data.days)
     })
    .catch((error) => {
      console.error(error) 
      setError(true)
    })
      setLoading(false)
    }
    SearchCity()
  },[search])
  
  return (

    <div className="App">
       
      <div className="Container">
        <Sidebar/>
      <div className='Block-left'>
          <Search 
            error={error}
            setError={setError}
            weather={weather} 
            setWeather={setWeather} 
            setSearchCities={setSearchCities} 
            setSearch={setSearch} 
            searchCities={searchCities} 
            />
          <BlockToday 
          weather={weather}
          weatherDay={weatherDay}
          loading={loading}
          />
          <div className='App-wrap'>
            <BlockDetails
             weatherDayDetals={weatherDayDetals} 
            />
            <BlockAirConditions weaterDay={weatherDay}/>
          </div>
      </div>
      <div className="Block-right">
          <BlockWeek weatherWeek={weatherWeek} />
      </div>
    </div>
    </div>
  );
}

export default App;
