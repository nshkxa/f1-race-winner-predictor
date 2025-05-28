import { Track } from '../types';

export const tracks: Track[] = [
  {
    id: 1,
    name: 'Monaco',
    location: 'Monte Carlo',
    length: 3.337,
    characteristics: ['street circuit', 'slow', 'tight'],
    imageUrl: 'https://images.pexels.com/photos/3662831/pexels-photo-3662831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficultyLevel: 9
  },
  {
    id: 2,
    name: 'Monza',
    location: 'Italy',
    length: 5.793,
    characteristics: ['high speed', 'low downforce', 'long straights'],
    imageUrl: 'https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficultyLevel: 6
  },
  {
    id: 3,
    name: 'Silverstone',
    location: 'United Kingdom',
    length: 5.891,
    characteristics: ['high speed', 'flowing', 'technical'],
    imageUrl: 'https://images.pexels.com/photos/5667619/pexels-photo-5667619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficultyLevel: 7
  },
  {
    id: 4,
    name: 'Spa-Francorchamps',
    location: 'Belgium',
    length: 7.004,
    characteristics: ['high speed', 'elevation changes', 'unpredictable weather'],
    imageUrl: 'https://images.pexels.com/photos/12309501/pexels-photo-12309501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficultyLevel: 8
  },
  {
    id: 5,
    name: 'Suzuka',
    location: 'Japan',
    length: 5.807,
    characteristics: ['technical', 'flowing', 'high downforce'],
    imageUrl: 'https://images.pexels.com/photos/9944045/pexels-photo-9944045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficultyLevel: 8
  },
  {
    id: 6,
    name: 'Circuit of the Americas',
    location: 'United States',
    length: 5.513,
    characteristics: ['technical', 'elevation changes', 'overtaking opportunities'],
    imageUrl: 'https://images.pexels.com/photos/12763282/pexels-photo-12763282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficultyLevel: 7
  }
];