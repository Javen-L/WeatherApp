
import React, { useEffect, useRef } from 'react';
import './MainCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

import useGetWeatherData from '../../api/api-hooks';
import { FetchState } from '../../types';

const cardStyle = {
  display: "flex",
  height: "90vh",
  width: "70vw",
  backgroundSize:'cover', 
  flexDirection:'row', 
  backgroundImage:`url(${require("../../assets/sunset.jpg")})`
};

const leftCardStyle = {
  width:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between'
}

function MainCard() {
  const lat = 47.603230
  const long = -122.330280
  const [weatherData, fetchState, getWeatherData] = useGetWeatherData(lat, long);

  useEffect(() => {
    getWeatherData()
  }, []);
  
  return (
    <div className = "main">
      <Card sx={cardStyle} raised={true}>
        <CardContent sx={leftCardStyle}>
          <Typography gutterBottom variant="subtitle2" component="h2">
            Weather App
          </Typography>
          {fetchState === FetchState.LOADING && <p>Fetching weather...</p>}
          {fetchState === FetchState.ERROR && (
            <>
              <p>OOps!! Something went wrong</p>
            </>
          )}
          {fetchState === FetchState.SUCCESS && (
            <>
              <WeatherDisplay data={weatherData} />
            </>
          )}
          {/* <WeatherDisplay /> */}
        </CardContent>
        <CardContent sx={{opacity: .5, backgroundColor: '#000', width:'100%'}}>
        
        </CardContent>
      </Card>
    
    </div>
  );
}

export default MainCard;
