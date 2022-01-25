import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './FundCards.css';

export default function FundCards( { props }  ) {
    console.log(props)
    const cardsArray = props.map(fund => (
        <Card 
          sx={{
            width:'20%', 
            height: '15%',
            margin: 'auto', 
            border: 2, 
            borderColor: '#6C63FF'
          }}>
            <CardMedia
            component="img"
            height="40%"
            // image={fund.logo}
            image='https://upload.wikimedia.org/wikipedia/commons/c/c5/Bitcoin_logo.svg'
            alt={fund.asset_name}
            padding='2%'
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {fund.asset_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Funds Invested {fund.array_agg.length}
            </Typography>
            </CardContent>
      </Card>
      ));
    
      return (
        <div className='card-array'>
          {cardsArray}
        </div>
      );

}