import CityWeatherCard from "./components/CityWeatherCard";
import { WeatherData } from "./types";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
const mockData:WeatherData={
    city: 'New York',
    temperature: 22,
    description: 'Clear sky',
    humidity: 60,
    windSpeed: 3.5,
    icon: 'http://openweathermap.org/img/wn/01d.png',
};

test('renders city weather card correctly',()=>{
     render(<CityWeatherCard data={mockData}/>);
     expect(screen.getByText(/New York/i)).toBeInTheDocument();
     expect(screen.getByText(/22°C/i)).toBeInTheDocument();
     expect(screen.getByText(/Clear sky/i)).toBeInTheDocument();
})