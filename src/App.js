import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LandingDataTable from './Components/LandingDataTable'
import NavBar from './Components/NavBar'
import TickerPage from './Components/TickerPage'

function App() {
  return (
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
  );
}

export default App;
