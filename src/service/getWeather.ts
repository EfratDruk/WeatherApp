const cities = ["Eilat", "New York", "London", "Alaska"];
const API_KEY = "8ee633956bad6ae1965b557a94ecfcba";

const getCordinats = async (city: string) => {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  const getData = await res.json();
  if (!getData[0]) return null;
  return { lat: getData[0].lat, lon: getData[0].lon };
};

const getWeather = async (lat: number, lon: number) => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=he&appid=${API_KEY}`
  );

  const data = await weatherRes.json();
  return {
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
  };
};

export const fetchWeatherData = async () => {
  return await Promise.all(
    cities.map(async (city) => {
        const coords = await getCordinats(city);
        if (!coords) return null;
        return await getWeather(coords.lat, coords.lon);
    })
  );
};
