import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { Driver, Track, Weather } from '../types';

interface RaceResultsProps {
  results: Driver[];
  track: Track;
  weather: Weather;
}

const RaceResults: React.FC<RaceResultsProps> = ({ results, track, weather }) => {
  const [showPositionChanges, setShowPositionChanges] = useState(false);
  
  useEffect(() => {
    // Automatically show position changes after a short delay
    const timer = setTimeout(() => {
      setShowPositionChanges(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [results]);

  return (
    <div className="card p-6 race-animation">
      <h2 className="text-2xl font-bold mb-2">Race Prediction Results</h2>
      <p className="text-gray-600 mb-6">
        {track.name} • {weather.condition.charAt(0).toUpperCase() + weather.condition.slice(1)} • {weather.temperature}°C
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-2 pl-2 w-16">Pos</th>
              <th className="text-left pb-2">Driver</th>
              <th className="text-left pb-2 hidden sm:table-cell">Team</th>
              <th className="text-right pb-2 pr-4 hidden md:table-cell">Gap</th>
              {showPositionChanges && (
                <th className="text-right pb-2 pr-2 w-20">Change</th>
              )}
            </tr>
          </thead>
          <tbody>
            {results.map((driver, index) => {
              const positionChange = driver.startingPosition - (index + 1);
              
              return (
                <tr 
                  key={driver.id} 
                  className={`
                    border-b hover:bg-gray-50 transition-all
                    ${index === 0 ? 'bg-yellow-50' : ''}
                    ${index === 1 ? 'bg-gray-50' : ''}
                    ${index === 2 ? 'bg-amber-50' : ''}
                  `}
                >
                  <td className="py-3 pl-2">
                    {index === 0 && <Trophy className="inline-block h-5 w-5 text-yellow-500 mr-1" />}
                    {index + 1}
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className={`w-1 h-8 rounded-full team-${driver.teamCode} mr-3`}></div>
                      <span>{driver.name}</span>
                    </div>
                  </td>
                  <td className="py-3 hidden sm:table-cell text-gray-600">{driver.team}</td>
                  <td className="py-3 pr-4 text-right hidden md:table-cell">
                    {index === 0 ? '-' : `+${(index * 1.2 + Math.random() * 2).toFixed(2)}s`}
                  </td>
                  {showPositionChanges && (
                    <td className="py-3 pr-2 text-right">
                      <span 
                        className={`inline-block px-2 py-0.5 rounded font-medium ${
                          positionChange > 0 
                            ? 'text-green-700 bg-green-100' 
                            : positionChange < 0 
                              ? 'text-red-700 bg-red-100'
                              : 'text-gray-600 bg-gray-100'
                        }`}
                      >
                        {positionChange > 0 && '+'}
                        {positionChange !== 0 ? positionChange : '-'}
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-bold mb-2">Race Analysis</h3>
        <p className="text-sm text-gray-700">
          {getRandomAnalysis(weather, track, results[0])}
        </p>
      </div>
    </div>
  );
};

// Helper function to generate random analysis text
function getRandomAnalysis(weather: Weather, track: Track, winner: Driver): string {
  const analyses = [
    `${winner.name} demonstrated exceptional skill in ${weather.condition} conditions, maximizing their pace on ${track.name}'s challenging layout.`,
    `The ${weather.condition} weather played a significant role in this race, with ${winner.name} and their team making the perfect strategy calls.`,
    `${track.name}'s ${track.characteristics[0]} sections proved decisive in this race, giving ${winner.name} the edge over their competitors.`,
    `With temperatures at ${weather.temperature}°C, tire management was critical today, and ${winner.name} executed their strategy flawlessly.`,
    `${winner.name}'s victory showcases their adaptability to changing conditions, as they navigated ${track.name}'s challenges with precision.`
  ];
  
  return analyses[Math.floor(Math.random() * analyses.length)];
}

export default RaceResults;