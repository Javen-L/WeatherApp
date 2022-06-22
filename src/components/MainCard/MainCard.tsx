
import React from 'react';
import './MainCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MainCard() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
      <Card sx={{display: 'flex', backgroundSize:'cover', height:800, maxWidth:1000, flexDirection:'row', backgroundImage:`url(${require("../../assets/sunset.jpg")})`}} raised={true}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weather App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardContent sx={{opacity: .5, backgroundColor: '#000'}}>
          <Typography gutterBottom variant="h5" component="h2" color='#fff'>
            Lizard
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    
    </div>
  );
}

export default MainCard;
