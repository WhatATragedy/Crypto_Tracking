import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import LandingDataTable from './Components/LandingDataTable'
import NavBar from './Components/NavBar'
import TickerPage from './Components/TickerPage'
// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div className="App">
        <header className="header">
          <NavBar/>
        </header>
        <div className="App-body">
          <Switch>
            <Route exact path="/">
              <LandingDataTable className="App-Main-Datatable"/>
            </Route>
            <Route path="/tickers">
              <TickerPage />
            </Route>
            <Route path="/funds">
              <div>
                Fund Page
              </div>
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
    {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
