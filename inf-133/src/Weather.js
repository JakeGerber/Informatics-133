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
    
    let fahrenheit = Math.round(((info["main"]["temp"]) - 273.15)* (9/5) + 32)
    let degreeSymbol = "\u00B0 F"
    
    switch(JSON.stringify(info["weather"][0]["main"])){
        case "\"Clouds\"":
            return<i class="fa-solid fa-cloud"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Thunderstorm\"":
            return<i class="fa-solid fa-cloud-bolt"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Drizzle\"":
            return<i class="fa-solid fa-cloud-rain"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Rain\"":
            return<i class="fa-solid fa-cloud-showers-heavy"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Snow\"":
            return<i class="fa-solid fa-snowflake"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Smoke\"":
            return<i class="fa-solid fa-smog"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Fog\"":
            return<i class="fa-solid fa-smog"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Tornado\"":
            return<i class="fa-solid fa-tornado"> | {fahrenheit}{degreeSymbol}  </i>
        case "\"Clear\"":
            return <i class="fa-solid fa-sun"> | {fahrenheit}{degreeSymbol}  </i>
            
        default:
            return <h1>{JSON.stringify(info["weather"][0]["main"])}  | {fahrenheit}{degreeSymbol}  </h1>
    }

    

}