import React, { useEffect, useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";

// import ReactSwitch from "react-switch";

const HomeWeatherApp = () => {

    // Seacrh URL of Api
    const searchApiUrl = "https://api.weatherapi.com/v1/search.json?key=3395a9b3e7fc421d96e70924241710&q=";

    //Forecast Url of Api
    const forecastApiUrl = (selectedCity) => `https://api.weatherapi.com/v1/forecast.json?key=3395a9b3e7fc421d96e70924241710&q=${selectedCity}&days=7&aqi=no&alerts=no`;


    // state for get city name from input & append to the api
    const [inputCity, setInputCity] = useState("");

    //to get the array data from api
    const [City, setCity] = useState([]);


    const [clickedCity, setClickedCity] = useState();

    //to get only City suggestion place
    const [suggestionCity, setSuggestionCity] = useState([]);

    //to get current weather
    const [currentWeather, setCurrentWeather] = useState();

    //to get forecast weather
    const [forecastWeather, setForecastWeather] = useState();

    //to get location weather
    const [location, setLocation] = useState();

    //to get 



    //onload api based on input city
    useEffect(() => {
        if (inputCity.length >= 4) {
            fetchApi();
        }
    }, [inputCity]);

    // use of append  api with input city 
    const fetchApi = async () => {
        try {
            const response = await axios.get(searchApiUrl + inputCity);
            const data = await response.data;

            const suggestCity = data.map((data) => {
                return `${data.name},${data.region},${data.country}`;
            });
            setSuggestionCity(suggestCity);
            setCity(data);
        }
        catch (error) {
            console.log(error);
        }
    }



    //
    const handleSelectedCity = (selectedCity) => {
        console.log("The Selected city:", selectedCity);
        fetchForecastApiUrl(selectedCity);
        setSuggestionCity([]);
        // setClickedCity(selectedCity);
        setInputCity(selectedCity);
    }

    //fetch forecast url
    const fetchForecastApiUrl = async (selectedCity) => {
        try {
            const response = await axios.get(forecastApiUrl(selectedCity));
            const data = await response.data;
            console.log(data);

            setCurrentWeather(data.current);


            setForecastWeather(data.forecast);

            setLocation(data.location);
        }
        catch (error) {
            console.log("Forecast url error:", error);
        }
    }

    const [isDay, setIsDay] = useState(true); // Initial mode is day
    const [weather1, setWeather1] = useState('sunny'); // Initial weather


    useEffect(() => {
        // Simulate fetching weather data and time
        const fetchWeatherAndTime = async () => {
            const weatherData = await new Promise((resolve) =>
                setTimeout(() => resolve('rainy'), 1000)
            );
            const currentTime = new Date().getHours();
            setIsDay(currentTime >= 6 && currentTime < 18); // Day mode between 6 AM and 6 PM
            setWeather1(weatherData);
        };

        fetchWeatherAndTime();
    }, []);


    useEffect(() => {
        document.body.className = isDay ? 'day-mode' : 'night-mode';
    }, [isDay]);


    return (
        <>

            <div className={isDay ? 'day-mode' : 'night-mode'} >
                <div className="overflow-auto">
                    <p className="fs-2 p-2 mt-2" id="animation">{isDay ? 'Day mode' : 'Night mode'}</p>

                    <div className="container text-center ">
                        <h4 id={isDay ? 'tday-mode' : 'tnight-mode'} > Welcome to Wheather App</h4>
                    </div>


                    {/* to get more line */}
                    <br />
                    {/* Text box Container */}
                    <div className="  p-5 "  >
                        <div className=" container rounded p-3" id={isDay ? 'cday-mode' : 'cnight-mode'} >
                            {/* Text Box */}
                            <input
                                type="text"
                                value={inputCity}
                                className="form-control"
                                placeholder="Enter 4 character to find location"
                                onChange={(e) => {
                                    setInputCity(e.target.value);
                                    if (e.target.value === "") {
                                        setCurrentWeather();
                                        setForecastWeather();
                                        setLocation();
                                        setClickedCity();
                                    }
                                }}
                            >

                            </input>
                            {/* to return the search  suggestion box */}
                            {suggestionCity && suggestionCity.map((city, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="text-center pe-auto text-white-75 bg-light rounded mt-1 bg-opacity-50"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSelectedCity(city)}>

                                        {city}
                                    </div>)
                            })}
                        </div>

                    </div>
                    <br />
                    <br />

                    <div >
                        <h4> {currentWeather && <Current isDay={isDay} currentWeather={currentWeather} location={location} />} </h4>
                    </div>

                    <div className="">
                        <h4> {forecastWeather && <Forecast isDay={isDay} forecastWeather={forecastWeather} location={location} />} </h4>
                    </div>
                </div>


            </div>

        </>
    )
}
// }
export default HomeWeatherApp;