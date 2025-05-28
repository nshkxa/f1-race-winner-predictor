import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';
import { Weather, WeatherCondition } from '../types';

interface WeatherSelectorProps {
  weather: Weather;
  onWeatherChange: (weather: Weather) => void;
}

const WeatherSelector: React.FC<WeatherSelectorProps> = ({ weather, onWeatherChange }) => {
  const handleConditionChange = (condition: WeatherCondition) => {
    // Automatically adjust precipitation based on condition
    let precipitation = weather.precipitation;
    
    switch (condition) {
      case 'sunny':
        precipitation = 0;
        break;
      case 'cloudy':
        precipitation = Math.min(precipitation, 20);
        break;
      case 'rainy':
        precipitation = Math.max(30, Math.min(precipitation, 70));
        break;
      case 'stormy':
        precipitation = Math.max(60, precipitation);
        break;
    }
    
    onWeatherChange({ 
      ...weather, 
      condition,
      precipitation
    });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value, 10);
    
    onWeatherChange({ 
      ...weather, 
      [name]: numValue 
    });
  };

  const weatherIcons = {
    sunny: <Sun className="h-6 w-6 weather-sunny" />,
    cloudy: <Cloud className="h-6 w-6 weather-cloudy" />,
    rainy: <CloudRain className="h-6 w-6 weather-rainy" />,
    stormy: <CloudLightning className="h-6 w-6 weather-stormy" />,
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">Weather Conditions</h2>
      
      <div className="grid grid-cols-4 gap-2 mb-6">
        {(['sunny', 'cloudy', 'rainy', 'stormy'] as WeatherCondition[]).map((condition) => (
          <button
            key={condition}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
              weather.condition === condition 
                ? 'bg-[rgb(var(--f1-blue))] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleConditionChange(condition)}
          >
            {weatherIcons[condition]}
            <span className="mt-1 text-xs capitalize">{condition}</span>
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="flex justify-between mb-1">
            <span>Temperature</span>
            <span>{weather.temperature}°C</span>
          </label>
          <input
            type="range"
            name="temperature"
            min="0"
            max="40"
            value={weather.temperature}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
        
        <div>
          <label className="flex justify-between mb-1">
            <span>Humidity</span>
            <span>{weather.humidity}%</span>
          </label>
          <input
            type="range"
            name="humidity"
            min="0"
            max="100"
            value={weather.humidity}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
        
        <div>
          <label className="flex justify-between mb-1">
            <span>Wind Speed</span>
            <span>{weather.windSpeed} km/h</span>
          </label>
          <input
            type="range"
            name="windSpeed"
            min="0"
            max="60"
            value={weather.windSpeed}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
        
        <div>
          <label className="flex justify-between mb-1">
            <span>Precipitation</span>
            <span>{weather.precipitation}%</span>
          </label>
          <input
            type="range"
            name="precipitation"
            min="0"
            max="100"
            value={weather.precipitation}
            onChange={handleSliderChange}
            className="slider"
            disabled={weather.condition === 'sunny'}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherSelector;