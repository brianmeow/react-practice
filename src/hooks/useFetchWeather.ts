import { useEffect, useState } from "react"
import { WeatherData } from "../types";
import { fetchWeatherData } from "../services/weatherService";


export const useFetchWeather = (city:string)=>{
    const [weatherData,setWeatherData] = useState<WeatherData | null>(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
          
        const fetchData = async()=>{
             try{
              const data = await fetchWeatherData(city);
              setWeatherData(data);
             }catch(err){
                if(err) setError('Failed to fetch weather data.');
             } finally{
               setLoading(false);
             }
        }

        fetchData();

    },[city]);

    return {weatherData,loading,error}
}