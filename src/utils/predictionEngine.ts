import { Driver, Track, Weather, TireCompound } from '../types';

interface DriverPerformance {
  driver: Driver;
  performanceScore: number;
}

export function predictRaceResults(
  drivers: Driver[],
  track: Track,
  weather: Weather,
  tireCompound: TireCompound,
  tireWear: number
): Driver[] {
  // Calculate performance score for each driver based on various factors
  const driverPerformances: DriverPerformance[] = drivers.map(driver => {
    let performanceScore = calculateBasePerformance(driver);
    
    // Apply weather effects
    performanceScore = applyWeatherEffects(performanceScore, driver, weather);
    
    // Apply tire effects
    performanceScore = applyTireEffects(performanceScore, driver, tireCompound, tireWear);
    
    // Apply track specific effects
    performanceScore = applyTrackEffects(performanceScore, driver, track);
    
    // Add some randomness for unpredictability
    performanceScore += (Math.random() * 10) - 5; // -5 to +5 random factor
    
    return {
      driver,
      performanceScore
    };
  });
  
  // Sort by performance score (higher is better)
  driverPerformances.sort((a, b) => b.performanceScore - a.performanceScore);
  
  // Return ordered list of drivers (the results)
  return driverPerformances.map(dp => dp.driver);
}

// Calculate base driver performance score
function calculateBasePerformance(driver: Driver): number {
  // Weighted average of driver skills
  const { racePace, qualifying, consistency, tireManagement } = driver.skills;
  
  return (
    (racePace * 0.4) +        // Race pace is most important
    (qualifying * 0.15) +     // Qualifying affects starting position
    (consistency * 0.25) +    // Consistency helps maintain performance
    (tireManagement * 0.2)    // Tire management important for race distance
  );
}

// Apply weather effects to performance
function applyWeatherEffects(score: number, driver: Driver, weather: Weather): number {
  let weatherModifier = 0;
  
  // Wet weather skill becomes more important in rainy/stormy conditions
  if (weather.condition === 'rainy' || weather.condition === 'stormy') {
    // How much better/worse the driver is in wet conditions compared to average
    const wetSkillDelta = driver.skills.wetWeather - 80;
    weatherModifier += wetSkillDelta * 0.2;
    
    // Heavy rain amplifies the effect of wet weather skill
    if (weather.condition === 'stormy') {
      weatherModifier *= 1.5;
    }
    
    // Precipitation intensity further affects performance
    weatherModifier *= (weather.precipitation / 50); // Normalize to 0-2 range
  }
  
  // Temperature effects on driver performance (some drivers better in hot/cold)
  const tempEffect = (Math.random() * 6) - 3; // Random -3 to +3 effect
  weatherModifier += tempEffect * (Math.abs(weather.temperature - 25) / 10);
  
  // Wind effects (high winds can affect some drivers more)
  if (weather.windSpeed > 30) {
    weatherModifier -= Math.random() * 3; // Small negative impact
  }
  
  return score + weatherModifier;
}

// Apply tire compound and wear effects
function applyTireEffects(score: number, driver: Driver, compound: TireCompound, wear: number): number {
  let tireModifier = 0;
  
  // Tire management skill impact increases with wear
  const tireSkillImpact = (driver.skills.tireManagement - 80) * 0.1;
  tireModifier += tireSkillImpact * (wear / 50); // More impact with higher wear
  
  // Compound specific effects
  switch (compound) {
    case 'soft':
      // Soft tires reward qualifying pace but degrade quickly
      tireModifier += (driver.skills.qualifying - 80) * 0.05;
      tireModifier -= (wear / 50) * 5; // Significant performance drop with wear
      break;
    case 'medium':
      // Medium tires are balanced
      tireModifier += (driver.skills.consistency - 80) * 0.05;
      tireModifier -= (wear / 70) * 3; // Moderate performance drop with wear
      break;
    case 'hard':
      // Hard tires reward consistency and tire management
      tireModifier += ((driver.skills.consistency + driver.skills.tireManagement) / 2 - 80) * 0.05;
      tireModifier -= (wear / 90) * 2; // Minimal performance drop with wear
      break;
    case 'intermediate':
      // Intermediates work best in damp conditions
      // This will be handled in weather effects
      break;
    case 'wet':
      // Wet tires work best in very wet conditions
      // This will be handled in weather effects
      break;
  }
  
  return score + tireModifier;
}

// Apply track specific effects
function applyTrackEffects(score: number, driver: Driver, track: Track): number {
  let trackModifier = 0;
  
  // Different skills matter on different track types
  if (track.characteristics.includes('high speed')) {
    trackModifier += (driver.skills.racePace - 80) * 0.1;
  }
  
  if (track.characteristics.includes('technical')) {
    trackModifier += (driver.skills.consistency - 80) * 0.1;
  }
  
  if (track.characteristics.includes('street circuit')) {
    trackModifier += (driver.skills.qualifying - 80) * 0.1; // Qualifying is important on street circuits
  }
  
  // Track difficulty affects consistency
  trackModifier += ((100 - driver.skills.consistency) * track.difficultyLevel) * -0.01;
  
  return score + trackModifier;
}