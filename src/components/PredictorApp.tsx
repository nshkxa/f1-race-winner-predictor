import React, { useState } from 'react';
import TrackSelector from './TrackSelector';
import WeatherSelector from './WeatherSelector';
import TireSelector from './TireSelector';
import DriverSelector from './DriverSelector';
import RaceResults from './RaceResults';
import { Track, Weather, TireCompound, Driver } from '../types';
import { predictRaceResults } from '../utils/predictionEngine';

const PredictorApp: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<Weather>({
    condition: 'sunny',
    temperature: 25,
    humidity: 50,
    windSpeed: 10,
    precipitation: 0
  });
  const [selectedTire, setSelectedTire] = useState<TireCompound>('medium');
  const [tireWear, setTireWear] = useState<number>(0);
  const [selectedDrivers, setSelectedDrivers] = useState<Driver[]>([]);
  const [raceResults, setRaceResults] = useState<Driver[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePrediction = () => {
    if (!selectedTrack) {
      alert('Please select a track');
      return;
    }

    if (selectedDrivers.length < 2) {
      alert('Please select at least 2 drivers');
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const results = predictRaceResults(
        selectedDrivers,
        selectedTrack,
        selectedWeather,
        selectedTire,
        tireWear
      );
      
      setRaceResults(results);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <TrackSelector onSelectTrack={setSelectedTrack} selectedTrack={selectedTrack} />
          <WeatherSelector 
            weather={selectedWeather} 
            onWeatherChange={setSelectedWeather} 
          />
          <TireSelector 
            selectedTire={selectedTire} 
            onTireChange={setSelectedTire}
            tireWear={tireWear}
            onTireWearChange={setTireWear}
          />
        </div>
        
        <div className="space-y-6">
          <DriverSelector 
            selectedDrivers={selectedDrivers} 
            onDriversChange={setSelectedDrivers} 
          />
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          onClick={handlePrediction} 
          disabled={isLoading || !selectedTrack || selectedDrivers.length < 2}
          className={`btn ${isLoading ? 'bg-gray-400' : 'btn-primary'} px-8 py-3 text-lg`}
        >
          {isLoading ? 'Predicting...' : 'Predict Race Results'}
        </button>
      </div>
      
      {raceResults && (
        <RaceResults results={raceResults} track={selectedTrack!} weather={selectedWeather} />
      )}
    </div>
  );
};

export default PredictorApp;