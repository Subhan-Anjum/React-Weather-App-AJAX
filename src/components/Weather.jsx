import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Display from "./Display";

const Weather = () => {
  const [search, setSearch] = useState("karachi");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0eedd0b2c0fb796194efef7e4d8972d`
      );
      const data = response.data;
      if (data.cod === "404") {
        setError(data.message);
        setLoading(false);
      } else {
        setWeatherData(data);
        setLoading(false);
        setError("");
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchWeather("karachi");
  }, []);

  return (
    <div className="main">
      <Search
        onFetchWeather={fetchWeather}
        search={search}
        onSetSearch={setSearch}
      />
      <Display error={error} loading={loading} search={search} weatherData={weatherData} />
    </div>
  );
};

export default Weather;
