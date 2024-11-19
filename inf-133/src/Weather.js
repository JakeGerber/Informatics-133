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


    return (
        <div>
            <h1>WEATHER</h1>
            <h1>TYPE: {JSON.stringify(info)}</h1>
            <h1>TYPE: {JSON.stringify(info["weather"][0]["main"])}</h1>
        </div>
    )

}