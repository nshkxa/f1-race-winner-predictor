import { Driver } from '../types';

export const drivers: Driver[] = [
  // Red Bull
  {
    id: 1,
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    teamCode: 'redbull',
    number: 1,
    skills: {
      racePace: 95,
      qualifying: 94,
      wetWeather: 92,
      consistency: 90,
      tireManagement: 88
    },
    startingPosition: 1
  },
  {
    id: 2,
    name: 'Sergio Perez',
    team: 'Red Bull Racing',
    teamCode: 'redbull',
    number: 11,
    skills: {
      racePace: 85,
      qualifying: 82,
      wetWeather: 84,
      consistency: 78,
      tireManagement: 88
    },
    startingPosition: 5
  },
  
  // Ferrari
  {
    id: 3,
    name: 'Charles Leclerc',
    team: 'Ferrari',
    teamCode: 'ferrari',
    number: 16,
    skills: {
      racePace: 90,
      qualifying: 93,
      wetWeather: 85,
      consistency: 82,
      tireManagement: 83
    },
    startingPosition: 2
  },
  {
    id: 4,
    name: 'Carlos Sainz',
    team: 'Ferrari',
    teamCode: 'ferrari',
    number: 55,
    skills: {
      racePace: 87,
      qualifying: 86,
      wetWeather: 85,
      consistency: 85,
      tireManagement: 84
    },
    startingPosition: 4
  },
  
  // Mercedes
  {
    id: 5,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    teamCode: 'mercedes',
    number: 44,
    skills: {
      racePace: 92,
      qualifying: 91,
      wetWeather: 94,
      consistency: 91,
      tireManagement: 90
    },
    startingPosition: 3
  },
  {
    id: 6,
    name: 'George Russell',
    team: 'Mercedes',
    teamCode: 'mercedes',
    number: 63,
    skills: {
      racePace: 88,
      qualifying: 90,
      wetWeather: 87,
      consistency: 88,
      tireManagement: 85
    },
    startingPosition: 6
  },
  
  // McLaren
  {
    id: 7,
    name: 'Lando Norris',
    team: 'McLaren',
    teamCode: 'mclaren',
    number: 4,
    skills: {
      racePace: 89,
      qualifying: 88,
      wetWeather: 86,
      consistency: 84,
      tireManagement: 82
    },
    startingPosition: 7
  },
  {
    id: 8,
    name: 'Oscar Piastri',
    team: 'McLaren',
    teamCode: 'mclaren',
    number: 81,
    skills: {
      racePace: 85,
      qualifying: 86,
      wetWeather: 82,
      consistency: 80,
      tireManagement: 81
    },
    startingPosition: 8
  },
  
  // Aston Martin
  {
    id: 9,
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    teamCode: 'aston-martin',
    number: 14,
    skills: {
      racePace: 88,
      qualifying: 87,
      wetWeather: 91,
      consistency: 89,
      tireManagement: 92
    },
    startingPosition: 9
  },
  {
    id: 10,
    name: 'Lance Stroll',
    team: 'Aston Martin',
    teamCode: 'aston-martin',
    number: 18,
    skills: {
      racePace: 78,
      qualifying: 76,
      wetWeather: 82,
      consistency: 75,
      tireManagement: 80
    },
    startingPosition: 12
  },
  
  // Alpine
  {
    id: 11,
    name: 'Pierre Gasly',
    team: 'Alpine',
    teamCode: 'alpine',
    number: 10,
    skills: {
      racePace: 82,
      qualifying: 83,
      wetWeather: 80,
      consistency: 79,
      tireManagement: 80
    },
    startingPosition: 11
  },
  {
    id: 12,
    name: 'Esteban Ocon',
    team: 'Alpine',
    teamCode: 'alpine',
    number: 31,
    skills: {
      racePace: 81,
      qualifying: 82,
      wetWeather: 79,
      consistency: 78,
      tireManagement: 79
    },
    startingPosition: 10
  },
  
  // Williams
  {
    id: 13,
    name: 'Alex Albon',
    team: 'Williams',
    teamCode: 'williams',
    number: 23,
    skills: {
      racePace: 80,
      qualifying: 81,
      wetWeather: 78,
      consistency: 77,
      tireManagement: 79
    },
    startingPosition: 13
  },
  {
    id: 14,
    name: 'Logan Sargeant',
    team: 'Williams',
    teamCode: 'williams',
    number: 2,
    skills: {
      racePace: 70,
      qualifying: 71,
      wetWeather: 70,
      consistency: 68,
      tireManagement: 72
    },
    startingPosition: 20
  },
  
  // AlphaTauri/RB
  {
    id: 15,
    name: 'Yuki Tsunoda',
    team: 'RB',
    teamCode: 'alphatauri',
    number: 22,
    skills: {
      racePace: 77,
      qualifying: 78,
      wetWeather: 75,
      consistency: 74,
      tireManagement: 77
    },
    startingPosition: 15
  },
  {
    id: 16,
    name: 'Daniel Ricciardo',
    team: 'RB',
    teamCode: 'alphatauri',
    number: 3,
    skills: {
      racePace: 81,
      qualifying: 80,
      wetWeather: 83,
      consistency: 76,
      tireManagement: 82
    },
    startingPosition: 14
  },
  
  // Alfa Romeo
  {
    id: 17,
    name: 'Valtteri Bottas',
    team: 'Sauber',
    teamCode: 'alfa-romeo',
    number: 77,
    skills: {
      racePace: 83,
      qualifying: 85,
      wetWeather: 80,
      consistency: 82,
      tireManagement: 81
    },
    startingPosition: 16
  },
  {
    id: 18,
    name: 'Zhou Guanyu',
    team: 'Sauber',
    teamCode: 'alfa-romeo',
    number: 24,
    skills: {
      racePace: 74,
      qualifying: 75,
      wetWeather: 73,
      consistency: 73,
      tireManagement: 75
    },
    startingPosition: 17
  },
  
  // Haas
  {
    id: 19,
    name: 'Kevin Magnussen',
    team: 'Haas F1 Team',
    teamCode: 'haas',
    number: 20,
    skills: {
      racePace: 78,
      qualifying: 79,
      wetWeather: 77,
      consistency: 75,
      tireManagement: 76
    },
    startingPosition: 18
  },
  {
    id: 20,
    name: 'Nico Hulkenberg',
    team: 'Haas F1 Team',
    teamCode: 'haas',
    number: 27,
    skills: {
      racePace: 79,
      qualifying: 82,
      wetWeather: 78,
      consistency: 80,
      tireManagement: 79
    },
    startingPosition: 19
  }
];