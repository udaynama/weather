import React, { useState, useEffect } from "react";
import "./weather.css";
import { useQuery } from "react-query";
import updateDocuments from "../../components/hooks/Hooks";

// import { updateDocuments } from "../../components/hooks/Hooks";
const Weather = () => {
  const [city, setCity] = useState();
  // const [weatherData, setWeatherData] = useState([]);

  const data = (e) => {
    setCity(e.target.value);
    console.log("1234567890", e.target.value);
  };

const functionVal=(cityName)=>{
  
 console.log(updateDocuments(cityName));
}

// useEffect(()=>{
//   console.log(weatherdetails);
// },[weatherdetails])
  const getTemp = useUpdateDocuments();
  const getName = async () => {
    const body = {
      cityName: city,
    };
    await getTemp.mutateAsync(body);
  };
  // React.useEffect(() => {
  //   const url = "http://localhost:8000/weather";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <form className="main-container">
        <div className="sub-container">
          <div className="input">
            <input
              type="search"
              placeholder="   search temperature"
              className="input-feild"
              onChange={(e) => data(e)}
            />
          </div>
          <div className="weather-info">
            {/* {weatherdetails.map((value) => (
              <h1>
                {value.cityName} {value.temperature}
              </h1>
            ))} */}
            {/* <h3>city Name</h3> */}
            {/* <h3>today's temp : 25c </h3> */}
            <button onClick={functionVal(city)}>Save</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Weather;
