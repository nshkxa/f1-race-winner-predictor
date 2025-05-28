import React from 'react';
import { TireCompound } from '../types';

interface TireSelectorProps {
  selectedTire: TireCompound;
  onTireChange: (tire: TireCompound) => void;
  tireWear: number;
  onTireWearChange: (wear: number) => void;
}

const TireSelector: React.FC<TireSelectorProps> = ({ 
  selectedTire, 
  onTireChange,
  tireWear,
  onTireWearChange
}) => {
  const tireOptions: { value: TireCompound; label: string; color: string }[] = [
    { value: 'soft', label: 'Soft', color: 'bg-red-500' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { value: 'hard', label: 'Hard', color: 'bg-white border border-gray-300' },
    { value: 'intermediate', label: 'Intermediate', color: 'bg-green-500' },
    { value: 'wet', label: 'Wet', color: 'bg-blue-500' }
  ];

  const handleTireWearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTireWearChange(parseInt(e.target.value, 10));
  };

  const getTireDescription = (compound: TireCompound) => {
    switch (compound) {
      case 'soft':
        return 'Fastest but wears quickly. Best for qualifying and short stints.';
      case 'medium':
        return 'Balanced performance and durability. Good for most race conditions.';
      case 'hard':
        return 'Slowest but most durable. Best for long stints and hot conditions.';
      case 'intermediate':
        return 'For damp conditions or light rain. Performs poorly on dry track.';
      case 'wet':
        return 'For heavy rain conditions. Very slow on dry track.';
    }
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">Tire Selection</h2>
      
      <div className="grid grid-cols-5 gap-2 mb-6">
        {tireOptions.map((tire) => (
          <button
            key={tire.value}
            className={`relative flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
              selectedTire === tire.value 
                ? 'bg-gray-100 ring-2 ring-[rgb(var(--f1-blue))]'
                : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => onTireChange(tire.value)}
          >
            <div className={`w-6 h-6 rounded-full ${tire.color}`}></div>
            <span className="mt-2 text-xs">{tire.label}</span>
          </button>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{getTireDescription(selectedTire)}</p>
      
      <div>
        <label className="flex justify-between mb-1">
          <span>Tire Wear</span>
          <span>{tireWear}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={tireWear}
          onChange={handleTireWearChange}
          className="slider"
        />
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>New</span>
          <span>Worn</span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm">
          {tireWear < 20 && 'Tires are fresh with optimal grip.'}
          {tireWear >= 20 && tireWear < 50 && 'Tires are in good condition with slight performance drop.'}
          {tireWear >= 50 && tireWear < 80 && 'Tires are showing significant wear with reduced grip.'}
          {tireWear >= 80 && 'Tires are critically worn with severe performance impact.'}
        </p>
      </div>
    </div>
  );
};

export default TireSelector;