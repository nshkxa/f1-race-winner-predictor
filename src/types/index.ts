export type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'stormy';

export interface Weather {
  condition: WeatherCondition;
  temperature: number; // Celsius
  humidity: number; // Percentage
  windSpeed: number; // km/h
  precipitation: number; // Percentage
}

export type TireCompound = 'soft' | 'medium' | 'hard' | 'intermediate' | 'wet';

export interface Driver {
  id: number;
  name: string;
  team: string;
  teamCode: string;
  number: number;
  skills: {
    racePace: number;
    qualifying: number;
    wetWeather: number;
    consistency: number;
    tireManagement: number;
  };
  startingPosition: number;
}

export interface Track {
  id: number;
  name: string;
  location: string;
  length: number; // km
  characteristics: string[];
  imageUrl: string;
  difficultyLevel: number; // 1-10
}