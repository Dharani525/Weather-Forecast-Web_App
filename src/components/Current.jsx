import React from "react";

const Current = ({ currentWeather, location, isDay }) => {
    return (

        <div className="container overflow-auto">

            {/* change the background by day mode to night mode */}
            <div className="container mt-1 rounded " id={isDay ? 'cday-mode' : 'cnight-mode'}>
                <div >
                    <br />
                    {/* To display the location */}
                    <h5 className="text-center text-light ">Current Weather of {location.name},{location.region},{location.country}</h5>
                </div>

                <br />
                <div className="container">
                    <div className="row">
                        {/* current page la 1 row 1 card */}
                        <div className="col-md-3 col-sm-3">

                            <div
                                className="card h-75 d-flex  justify-content-center"
                                style={{ width: "90%" }}>
                                <div className="card-body ">
                                    <span><img src={currentWeather.condition.icon} alt="The image is loading...." /></span>
                                    <span style={{ fontSize: "75%" }}>{currentWeather.condition.text}</span>
                                </div>
                            </div>
                        </div>

                        {/* current page la 1 row 2 card */}
                        <div className="col-md-3 col-sm-3">
                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mt-2 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    Temp (in C):   {currentWeather.temp_c}
                                </div>
                            </div>

                        </div>

                        {/* current page la 1 row 3 card */}
                        <div className="col-md-3 col-sm-3">
                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mt-2 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    Temp (in F):   {currentWeather.temp_f}
                                </div>
                            </div>

                        </div>

                        {/* current page la 1 row 4 card */}
                        <div className="col-md-3 col-sm-3">

                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mt-2 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    Humidity:   {currentWeather.humidity}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        {/* current page la 2 row 1 card */}
                        <div className="col-md-3 col-sm-3">

                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mb-3 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    cloud:   {currentWeather.cloud}
                                </div>
                            </div>

                        </div>

                        {/* current page la 2 row 2 card */}
                        <div className="col-md-3 col-sm-3">
                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mb-3 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    Wind Degree:   {currentWeather.wind_degree}
                                </div>
                            </div>

                        </div>

                        {/* current page la 2 row 3 card */}
                        <div className="col-md-3 col-sm-3">
                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mb-3 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    Wind Dir:   "{currentWeather.wind_dir}"
                                </div>
                            </div>

                        </div>

                        {/* current page la 2 row 4 card */}
                        <div className="col-md-3 col-sm-3">

                            <div
                                className="card h-75 "
                                style={{ width: "65%" }}>
                                <div
                                    className="card-body d-flex  mb-3 justify-content-center"
                                    style={{ fontSize: "75%" }}>
                                    Wind Kph:   {currentWeather.wind_kph}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Current;