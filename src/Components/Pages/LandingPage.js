
// import { ReactComponent as ProductTearDownSvg } from '../../undraw_product_teardown_re_m1pc.svg';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './LandingPage.css';
import Button from '@mui/material/Button';
import { default as trend } from '../../undraw_trends_re_2bd0.svg';
import { default as ProductTearDownSvg } from '../../undraw_product_teardown_re_m1pc.svg';
import { Link } from 'react-router-dom'


const LandingPage = ( ) => {
  
    return (    
    <div className='app-main'> 
        <div className="top-row">
            <div>
                <h1> The Social Media Scraper For Crypto </h1>
                <Button 
                href="https://medium.com/p/c2ccd4af8680/edit"
                variant="contained"
                sx={{
                    minWidth: '100px',
                    boxShadow: 2,
                    background: 'grey',
                    m:1,
                    borderBottom: 4,
                    borderColor: 'transparent',
                    '&:hover': {
                        backgroundColor: '#D8DEE9',
                        color: "black",
                        borderBottom: 4,
                        borderColor: '#FA7268',
                    },
                }}>Learn More</Button>
                <Button 
                component={Link}
                to="/tickers"
                variant="contained"
                sx={{
                    minWidth: '100px',
                    boxShadow: 2,
                    background: 'grey',
                    m:1,
                    borderBottom: 4,
                    borderColor: 'transparent',
                    '&:hover': {
                        backgroundColor: '#D8DEE9',
                        color: "black",
                        borderBottom: 4,
                        borderColor: '#FA7268',
                    },
                }}>Start..</Button>
            </div>

            <img src={trend} alt="Trendy" width='50%'/>
        </div>
        <hr></hr>
        <div className='middle-row'>
            <img src={ProductTearDownSvg} width='40%' alt="Product Tear Down"></img>
            <div className='generic-card'>
                <Card 
                    sx={{ 
                        minWidth: 100,
                        m: 'auto',
                        boxShadow: 2,
                        background: '#4C566A',
                        color: '#D8DEE9',
                        border: 2, 
                        borderColor: '#FA7268',
                        borderRadius: '5px'
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} gutterBottom>
                        Crypto Coins Tracked
                        </Typography>
                        <Typography variant="h5" component="div">
                        550
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </div>
            <div className="generic-card">
                <Card 
                    sx={{ 
                        minWidth: 100,
                        boxShadow: 2,
                        m: 'auto',
                        background: '#4C566A',
                        color: '#D8DEE9',
                        border: 2, 
                        borderColor: '#FA7268',
                        borderRadius: '5px'
                    }}
                >
                    <CardContent sx={{ mx: "auto" }}>
                        <Typography sx={{ fontSize: 22}} gutterBottom>
                            Platforms Analysed
                        </Typography>
                        <Typography variant="h5" component="div">
                            1
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </div>
        </div>
    </div> 
    );
};

export default LandingPage;