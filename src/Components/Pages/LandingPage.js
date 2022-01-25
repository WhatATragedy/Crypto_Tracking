
import { ReactComponent as ProductTearDownSvg } from '../../undraw_product_teardown_re_m1pc.svg';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './LandingPage.css';


const LandingPage = ( ) => {
  
    return (
      <div className="app-main">
            <div className="landing-svg">
                <ProductTearDownSvg 
                    // viewBox="0 0 50 50px"
                />
                {/* <img src='../../undraw_product_teardown_re_m1pc.svg' alt="Product Teardown"/> */}
            </div>
            <div className="landing-middle-info-card">
                <div className='generic-card'>
                    <Card 
                        sx={{ 
                            minWidth: 100,
                            width: '80%',
                            m: 'auto',
                            boxShadow: 2,
                            background: '#4C566A',
                            color: '#D8DEE9',
                            border: 2, 
                            borderColor: '#6C63FF'
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
                        width: '80%',
                        m: 'auto',
                        background: '#4C566A',
                        color: '#D8DEE9',
                        border: 2, 
                        borderColor: '#6C63FF'
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