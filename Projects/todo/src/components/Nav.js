import React, { Component } from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">DevNgecu</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    <span className="navbar-text">
    Last Update  {new Date().toDateString()}
      
    </span>
  </div>
</nav>

               {/* <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link classNameName="navbar-brand" to="/">Home</Link>
  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span classNameName="navbar-toggler-icon"></span>
  </button>
  <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div classNameName="navbar-nav">
      <Link classNameName="nav-item nav-link" to="/about">About</Link>
      <a classNameName="nav-item nav-link" href="#">Pricing</a>
      <a classNameName="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav> */}
            </div>
        )
    }
}
