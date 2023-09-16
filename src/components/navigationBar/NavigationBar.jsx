import { Link } from 'react-router-dom';
import './navigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <a className="navbar-brand custom-margin-right" href="#">TEC</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link" to="/challenges">Challenges <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/submit_flag"> Submit Flag <span className="sr-only"></span></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;