import "./App.css";
import { useState } from "react";
import Info from "./components/Info";
import Weather from "./components/Weather";

function App() {
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [error, setError] = useState(false);

  const updateWeather = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=42b6a86aab1c460ca24120442221610&q=${inputCity}&aqi=no`
    )
      .then((el) => el.json())
      .then((data) => {
        setTemperature(data.current.temp_c);
        setCondition(data.current.condition.text);
        setFeelsLike(data.current.feelslike_c);
      })
      .catch((error) => setError(true));
  };

  return (
    <div className="App">
      <div className={temperature > 16 ? "wrapper warm" : "wrapper  "}>
        <Info />
        <input
          className="input"
          type="text"
          value={inputCity}
          onChange={(e) => {
            setInputCity(e.target.value);
          }}
          placeholder="Місто"
        />
        <button className="button" type="button" onClick={updateWeather}>
          Отримати погоду
        </button>

        <Weather
          temp={temperature}
          city={inputCity}
          cond={condition}
          feel={feelsLike}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
