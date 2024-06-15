import axios from 'axios';

const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.main.temp;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default fetchWeather;
