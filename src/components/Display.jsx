import icon from "../assets/img.png"; // Check the path of the image

import Error from "./Error";
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const Display = ({ weatherData, loading, error }) => {
  // Add null/undefined checks for weatherData and its properties
  const { name, main } = weatherData || {};
  const { temp, temp_max, temp_min } = main || {};

  return (
    <div className="display">
      <img src={icon} alt="" /> {/* Make sure icon is correctly imported and the path is valid */}
      {loading && <Loading />}
      <div className="content">
        {error ? (
          <Error />
        ) : (
          <>
            <h2>{name}</h2>
            {/* Convert temperature from Kelvin to Celsius */}
            <h1>{temp && (temp - 273.15).toFixed(2)} °C </h1>
            <div className="content-temp">
              <p>max - {temp_max && (temp_max - 273.15).toFixed(2)} °C</p>
              <p>min - {temp_min && (temp_min - 273.15).toFixed(2)} °C</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Display;
