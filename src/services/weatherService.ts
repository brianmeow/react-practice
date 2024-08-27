import axios from 'axios';
import {WeatherData} from '../types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherData = async(city:string):Promise<WeatherData>=>{
    console.log(process.env.WEATHER_END_POINT)
    const response = await axios.get(`${process.env.WEATHER_END_POINT}`,{
      params:{
        q:city,
        units:'metric',
        appid:API_KEY,
      }
    });

    const data = response.data;

    return {
        city:data.name,
        temperature:data.main.temp,
        description:data.weather[0].description,
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        icon:`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    }
}