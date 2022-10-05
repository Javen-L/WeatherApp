import axios from 'axios';
import { stringify } from 'querystring';
import { useState } from 'react';
import { FetchState, WeatherData } from '../types';

const useGetWeatherData = (lat: number, long:number) => {
    const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
    const [weatherData, setWeatherData] = useState<WeatherData>();

    const getWeatherData = async() => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY_OWM}`);
            console.log(res.data)
            const resData = res.data as WeatherData;
            setWeatherData(resData);
            setFetchState(FetchState.SUCCESS);
        } catch (err) {
            setFetchState(FetchState.ERROR);
        }
    };
    return [weatherData, fetchState, getWeatherData] as const;
}

export default useGetWeatherData;