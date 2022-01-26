import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { default as trend } from './undraw_trends_re_2bd0.svg';
// import LandingDataTable from './Components/LandingDataTable'
import NavBar from './Components/NavBar'
import TickerPage from './Components/Pages/TickerPage'
import LandingPage from './Components/Pages/LandingPage'
import FundPage from './Components/Pages/FundPage';
import Button from '@mui/material/Button';
// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div className="App wavey">
        <div className="header">
          <NavBar/>
        </div>
        <div className="App-body">
          <Switch>
            <Route exact path="/">
              <LandingPage className="App-Main-Datatable"/>
              <div className="midde-row">
                <h1> The Social Media Scraper For Crypto Currency </h1>
                <Button 
                  href="https://medium.com/p/c2ccd4af8680/edit"
                  variant="contained"
                  sx={{
                    minWidth: '100px',
                    boxShadow: 2,
                    background: 'grey',
                    m:1,
                    '&:hover': {
                      backgroundColor: '#D8DEE9',
                      color: "black",
                      borderBottom: 4,
                      borderColor: '#FA7268',

                    },
                  }}>
                  Learn More
                </Button>
                <img src={trend} alt="Trendy" width='100%'>
                </img>

              </div>
            </Route>
            <Route path="/tickers">
              <TickerPage />
            </Route>
            <Route path="/funds">
              <FundPage />
            </Route>
          </Switch>
          
        </div>
        <div className='footer'>
          Footer Here
        </div>
      </div>
      
    </Router>
    </QueryClientProvider>
  );
}

export default App;
