
import './NavBar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Sentonomics..</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/tickers" >Ticker</a>
          <a href="/funds" >VC Funds</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;