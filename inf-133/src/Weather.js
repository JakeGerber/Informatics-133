import React, {useState, useEffect} from 'react';

export const Weather = () => {

    const [info, setInfo] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.6458956&lon=-117.842799&appid=4125797745f2c41451cf29d3dc941da0")

            const result = await response.json();

            setInfo(result);
        }

        fetchData();
    }, []);

    if(!info || !info.weather) {
        return <p>loading...</p>
    } 
    
    switch(JSON.stringify(info["weather"][0]["main"])){
        case "\"Clouds\"":
            return<i class="fa-solid fa-cloud"></i>
        case "\"Thunderstorm\"":
            return<i class="fa-solid fa-cloud-bolt"></i>
        case "\"Drizzle\"":
            return<i class="fa-solid fa-cloud-rain"></i>
        case "\"Rain\"":
            return<i class="fa-solid fa-cloud-showers-heavy"></i>
        case "\"Snow\"":
            return<i class="fa-solid fa-snowflake"></i>
        case "\"Smoke\"":
            return<i class="fa-solid fa-smog"></i>
        case "\"Fog\"":
                return<i class="fa-solid fa-smog"></i>
        case "\"Tornado\"":
                return<i class="fa-solid fa-tornado"></i>
            
        default:
            return <h1>{JSON.stringify(info["weather"][0]["main"])}</h1>
    }

    return (
        <div>
            <h1>Weather</h1>
            
            <h1>The weather is currently {JSON.stringify(info["weather"][0]["main"])}</h1>
            
        </div>
    )

}