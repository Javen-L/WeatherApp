
import React, { useEffect } from 'react';
import * as moment from 'moment';
import { WeatherData } from '../../types';
import './WeatherDisplay.css';

interface Props {
  data: WeatherData | undefined
}
function WeatherDisplay(props:Props) {
  const iconUrl = "http://openweathermap.org/img/w/" + props.data?.weather[0].icon + ".png"
  const moment = require('moment')
  return (
    <div className='container'>
        <span className='temp'>{props.data?.main.temp.toFixed(1)} &#8451;</span>
        <div className='location'>
          <span className='cityText'>{props.data?.name}</span>
          <span className='smallText'>{moment().format('h:mm a, D MMM YY')}</span>
        </div>
        <div className="weatherIconBlock">
          <img src={iconUrl} alt="Weather icon" width="40" />
          <span className='smallText'>{props.data?.weather[0].description}</span>
        </div>   
    </div>
  );
}

export default WeatherDisplay;
