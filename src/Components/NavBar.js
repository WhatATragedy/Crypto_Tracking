import { Link } from 'react-router-dom'
import './NavBar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Sentonomics..</h1>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/tickers'>Tickers</Link>
          <Link to='/funds'>VC Funds</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;