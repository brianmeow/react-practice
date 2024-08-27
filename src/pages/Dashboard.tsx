import React, { useState } from 'react'
import { useFetchWeather } from '../hooks/useFetchWeather';
import CityWeatherCard from '../components/CityWeatherCard';

const Dashboard:React.FC = () => {
    const [city,setCity] = useState<string>('California');
    const {weatherData,loading,error} = useFetchWeather(city);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weatherData && <CityWeatherCard data={weatherData}/>}
        </div>
    )
}

export default Dashboard
