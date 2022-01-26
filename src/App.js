import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

// import LandingDataTable from './Components/LandingDataTable'
import NavBar from './Components/NavBar'
import TickerPage from './Components/Pages/TickerPage'
import LandingPage from './Components/Pages/LandingPage'
import FundPage from './Components/Pages/FundPage';

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
          <p>
          Please consider donating to keep this things running, and to keep me running. <br/>
          N3DJWIFE4BJEB6I4KZK5NNYMQJ2VQQIFBS2R2ETJLO7ZNSWFL7MRQEIPIQ (Algo Wallet)
          </p>

        </div>
      </div>
      
    </Router>
    </QueryClientProvider>
  );
}

export default App;
