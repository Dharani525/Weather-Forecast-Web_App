import React from "react";

const Forecast = ({ forecastWeather, location, isDay }) => {
    return (
        <div className="container p-3">
            <div id={isDay ? 'cday-mode' : 'cnight-mode'} className="container mt-3 rounded">
                <h5 className="text-center text-light">
                    <br />
                    Forecast Weather of {location.name}, {location.region}, {location.country}
                </h5>
                <div className="p-3">
                    {forecastWeather.forecastday.map((forecastday, index) => {
                        return (
                            <div className="container mt-1" key={index}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button forecast-grid"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse${index}`}
                                            >
                                                <div className="forecast-item">
                                                    <h6>Day ({index + 1}) : {forecastday.date}</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <img src={forecastday.day.condition.icon} alt="weather-icon" /><br />
                                                    <h6>{forecastday.day.condition.text}</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <h6>Max Temp: {forecastday.day.maxtemp_c}°C</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <h6>Max Temp: {forecastday.day.maxtemp_f}°F</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <h6>Sunrise: {forecastday.astro.sunrise}</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <h6>Sunset: {forecastday.astro.sunset}</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <h6>Moon Phase: {forecastday.astro.moon_phase}</h6>
                                                </div>
                                                <div className="forecast-item">
                                                    <h6>Moonrise: {forecastday.astro.moonrise}</h6>
                                                </div>
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${index}`}
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body overflow-auto">
                                                {forecastday.hour.map((data, hourIndex) => {
                                                    return (
                                                        <div key={hourIndex} className="mb-3">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <h6 className="m-4 p-1" style={{ width: "25%" }}>Time: {hourIndex}:00 Hrs</h6>
                                                                <h6 className="m-4 p-1" style={{ width: "25%" }}>Chance of rain: {data.chance_of_rain}%</h6>
                                                                <h6 style={{ width: "25%" }} className="m-1 p-1">
                                                                    <img src={data.condition.icon} alt="hour-weather-icon" /> {data.condition.text}
                                                                </h6>
                                                                <h6 className="m-4 p-1" style={{ width: "25%" }}>Temp: {data.temp_f}°F</h6>
                                                            </div>
                                                            <div className="progress mt-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-success" style={{ width: `${data.temp_f}%` }}>{data.temp_f}%</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Forecast;
