import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-fluid px-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
          <div className="container">
            <p className="navbar-brand">Danish Shafi</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" style={{marginRight: '10px'}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="Projects" style={{marginRight: '10px'}}>Projects</Link>
                </li>
                <li className="nav-item">
                  <Link to="Contact" style={{marginRight: '10px'}}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
};

export default Header
