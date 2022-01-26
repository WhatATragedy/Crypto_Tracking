import { Link } from 'react-router-dom'
import './NavBar.css';
import { default as logo } from '../logo.svg';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="Logo"></img></div>
        <h1 className="name">Sentonomics</h1>
        <div className="links">
          <Button 
            component={Link}
            to="/"
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
            }}
          >
            Home
          </Button>
          <Button 
            component={Link} 
            to="/tickers" 
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
            }}
          >
            Tickers
          </Button>
          <Button 
            component={Link} 
            to="/funds" 
            variant="contained" 
            sx={{
              minWidth: '100px',
              boxShadow: 1,
              background: 'grey',
              m:1,
              '&:hover': {
                backgroundColor: '#D8DEE9',
                color: "black",
                borderBottom: 4,
                borderColor: '#FA7268',

              },
            }}
          >VC Funds</Button>
        </div>
      </nav>
    );
  }
   
  export default Navbar;