import "./WeatherApp.css"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({city:"Delhi", feelsLike: 40.41, humidity: 8, temp: 44.05, tempMax: 44.05, tempMin: 44.05, weather:"haze"});

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    } 

    return(
        <div className="WeatherApp">
            <h2>Weather App</h2>

            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}

export default WeatherApp;