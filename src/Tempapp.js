import React, { useEffect, useState } from "react";
import weatherTrim from "./weatherTrim.mp4"

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Patna");
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const url = `https:api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=379b118ca561fcafa9858af5fa491041`
    //         const response = await fetch(url);
    //         const resJson = await response.json();
    //         setCity(resJson.main);
    //     }
    //     fetchApi();
    // }, [search])
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1189c4aa0a7cfef0110cd5e5a52760a9`
            const res = await fetch(url);
            const resjson = await res.json();
            // console.log(resjson)
            setCity(resjson.main);
        };
        fetchApi();
    }, [search]);
    return (

        <div>
            <video src={weatherTrim} autoPlay loop muted />
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i class="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}° Cel
                            </h1>
                            <h3 className="tempmin_max">
                                Max : {city.temp_max}° Cel </h3>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min}° Cel
                            </h3>
                            <h3 className="tempmin_max">
                                Pressure : {city.pressure} Pa
                            </h3>
                            <h3 className="tempmin_max">
                                Humidity : {city.humidity}
                            </h3>
                            <h3 className="tempmin_max">
                                Feel Like : {city.feels_like}
                            </h3>
                        </div>
                        <div className="wave1"></div>
                        <div className="wave2"></div>
                        <div className="wave3"></div>
                    </>
                )}


            </div>
        </div>
    )
}
export default Tempapp;
