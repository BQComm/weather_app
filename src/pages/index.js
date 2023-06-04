import React, { useEffect, useState } from 'react';


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=fa7e8f66cc59471da6933858230406&q=Panama');
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-blue-200 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Weather App</h1>
        {weatherData ? (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">Weather in {weatherData.location.name}</h2>
            <p className="text-xl text-center">Temperature: {weatherData.current.temp_c} &#8451;</p>
            <p className="text-xl text-center">Condition: {weatherData.current.condition.text}</p>
          </div>
        ) : (
          <p className="text-xl text-center">Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Weather />
    </div>
  );
}
