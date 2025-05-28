import React, { useState } from 'react';
import { drivers } from '../data/drivers';
import { Driver } from '../types';
import { Search, X } from 'lucide-react';

interface DriverSelectorProps {
  selectedDrivers: Driver[];
  onDriversChange: (drivers: Driver[]) => void;
}

const DriverSelector: React.FC<DriverSelectorProps> = ({ 
  selectedDrivers, 
  onDriversChange 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleDriverToggle = (driver: Driver) => {
    const isSelected = selectedDrivers.some(d => d.id === driver.id);
    
    if (isSelected) {
      onDriversChange(selectedDrivers.filter(d => d.id !== driver.id));
    } else {
      onDriversChange([...selectedDrivers, driver]);
    }
  };
  
  const filteredDrivers = drivers.filter(driver => 
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">Select Drivers</h2>
      
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search drivers or teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input pl-10"
        />
        {searchTerm && (
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setSearchTerm('')}
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        )}
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {selectedDrivers.map(driver => (
            <div 
              key={driver.id}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm team-${driver.teamCode}`}
            >
              <span>{driver.name}</span>
              <button
                onClick={() => handleDriverToggle(driver)}
                className="text-white opacity-80 hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-1">
        {filteredDrivers.map(driver => {
          const isSelected = selectedDrivers.some(d => d.id === driver.id);
          
          return (
            <div
              key={driver.id}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
              onClick={() => handleDriverToggle(driver)}
            >
              <div className={`w-1 h-12 rounded-full team-${driver.teamCode} mr-3`}></div>
              <div className="flex-grow">
                <h3 className="font-medium">{driver.name}</h3>
                <p className="text-sm text-gray-600">{driver.team}</p>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300">
                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-[rgb(var(--f1-red))]"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriverSelector;