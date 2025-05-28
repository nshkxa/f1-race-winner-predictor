import React from 'react';
import { tracks } from '../data/tracks';
import { Track } from '../types';

interface TrackSelectorProps {
  selectedTrack: Track | null;
  onSelectTrack: (track: Track) => void;
}

const TrackSelector: React.FC<TrackSelectorProps> = ({ selectedTrack, onSelectTrack }) => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">Select Track</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tracks.map((track) => (
          <div 
            key={track.id}
            className={`cursor-pointer transition-all duration-200 rounded-lg overflow-hidden border-2 ${
              selectedTrack?.id === track.id 
                ? 'border-[rgb(var(--f1-red))]' 
                : 'border-transparent hover:border-gray-300'
            }`}
            onClick={() => onSelectTrack(track)}
          >
            <div className="relative aspect-video">
              <img 
                src={track.imageUrl} 
                alt={track.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-2 text-white">
                  <h3 className="text-sm font-semibold">{track.name}</h3>
                  <p className="text-xs opacity-80">{track.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedTrack && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold">{selectedTrack.name}</h3>
          <p className="text-sm text-gray-600 mt-1">Length: {selectedTrack.length}km</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedTrack.characteristics.map((char, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackSelector;