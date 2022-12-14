import { NavLink } from 'react-router-dom';
import flowers from './images/flowers.png'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Nick Wagemann Assesment</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role='button' data-bs-toggle='dropdown'aria-expanded="false" >
              Resources
            </a>
            <ul className="dropdown-menu">
              <li><a  className="dropdown-item" aria-current="page" href="https://jsonplaceholder.typicode.com/guide/" >Typicode Guide</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://redux-toolkit.js.org/" >Redux Toolkit Docs</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://expressjs.com/" >ExpressJs Docs</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/18125177?start=660#questions">Udemy</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://stackoverflow.com/" >Stack Overflow</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://www.youtube.com/" >Youtube</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://www.google.com/" >Google</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="https://www.hackreactor.com/" >Hack Reactor</a></li>
            </ul>
          </li>
          </ul>
        </div>
        <img className='me-4' src={flowers} alt="1800Flowers"></img>
      </div>
    </nav>
  )
}

export default Nav;
