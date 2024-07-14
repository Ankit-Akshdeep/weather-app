import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fbf3633238217159af7d84133e90ada2";

    let [city,setCity] = useState("");
    let[error,setError] = useState(false);

    let getWeatherInfo = async ()=>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        // console.log(data);

        let result = {
            city:city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/>
                <br /><br />
            <Button variant="contained" size="medium" type='submit'> Search </Button>
            {error && <p>No such place Exist!</p>}
            </form>
        </div>
    );
}


export default SearchBox;