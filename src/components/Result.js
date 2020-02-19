import React from 'react';
import './Result.css'

const Result = (props) =>{
    const {date,temp,feelsLike,pressure,windSpeed,
        sunrise,sunset,err} = props.weather

    let construct = null;

    if(!err && props.city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        construct = (
            <section className="weatherSection">
                <p>Data: {date}</p>
                <p>Temperatura: {temp} °C</p>
                <p>Odczuwalna temperatura: {feelsLike}°C</p>
                <p>Ciśnienie: {pressure} hPa</p>
                <p>Prędkość wiatru: {windSpeed} km/h</p>
                <p>Wschód słońca o godzinie {sunriseTime}</p>
                <p>Zachód słońca o godzinie {sunsetTime}</p>
            </section>

        )
    }


    return(
        <div>
            {err?`Nie posiadamy w bazie tego miasta :(`:construct}
        </div>
    )
}

export default Result;