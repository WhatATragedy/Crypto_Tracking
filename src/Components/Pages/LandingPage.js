import { useState } from "react";
import { useQuery } from "react-query";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './LandingPage.css';
// import MaterialDataTable from './DataTable/MaterialDataTable'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const LandingPage = ( ) => {
    const [tableQuery, setTableQuery] = useState("")
    // const classes = styles();

    const { data: sentimentData } = useQuery("sentimentData", () => fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/ticker")
    .then((response) => response.json()), { initialData: [] });

    function search(rows = []) {
      return rows.filter(row => row.ticker.toLowerCase().indexOf(tableQuery.toLowerCase()) > -1)
    }
  
    return (
      <div className="App-Main">
        <div className="landing-top-row">
        <input 
            type="text" 
            value={tableQuery} 
            onChange={(e) => setTableQuery(e.target.value)}
            className="start-search"
        />
        </div>
        <div className="landing-middle-row">
            <div className="landing-svg">
                <img src='./undraw_product_teardown_re_m1pc.svg'/>
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
                            color: '#D8DEE9'
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
                        color: '#D8DEE9'
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
        {/* <div className="LandingTable">
          <MaterialDataTable data={search(sentimentData)}/>
        </div> */}
      </div>
      );
};

export default LandingPage;