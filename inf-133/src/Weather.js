import React, {useState, useEffect} from 'react';


//weather const, used to fetch and display weather data
export const Weather = () => {

    const [info, setInfo] = useState("");

    //useEffect triggers on initial load, call API 
    useEffect(() => {
        const fetchData = async () => {
            //grab api key from env necause super secret
            const apikey = process.env.REACT_APP_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.6458956&lon=-117.842799&appid=${encodeURIComponent(apikey)}`;
            const response = await fetch(url)

            const result = await response.json();

            setInfo(result);
        }

        fetchData();
    }, []);

    if(!info || !info.weather) {
        return <p>loading...</p>
    } 
    //API returns temperature in kelvin, convert to fahrenheit
    let fahrenheit = Math.round(((info["main"]["temp"]) - 273.15)* (9/5) + 32)
    //degree symbol
    let degreeSymbol = "\u00B0 F"
    
    //display icon depending on the weather 
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
        
            //incase error, just display the weather as a string
        default:
            return <h1>{JSON.stringify(info["weather"][0]["main"])}  | {fahrenheit}{degreeSymbol}  </h1>
    }

    

}