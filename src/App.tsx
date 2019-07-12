import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IzmenaUsluge from './pages/IzmenaUsluge';
import UnosUsluge from './pages/UnosUsluge';
import logo from "./assets/images/logo.png";

class App extends Component {
  render() {
    return (
      <Router>
		<div className="content">
			<div className="container">
			  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href = "#">
				  <img src={logo} width="150" height="60" alt="logo"/>
				</a>
				<div className="collpase nav-collapse">
				  <ul className="navbar-nav mr-auto">
					<li>
						<Link to="/unosusluge" className="nav-link">Kreiranje usluge</Link>
					</li>
					<li>
						<Link to="/izmenausluge" className="nav-link">Izmena usluge</Link>
					</li>					
				  </ul>
				</div>
			  </nav>
			  <Route path="/unosusluge" component={UnosUsluge} />
			  <Route path="/izmenausluge" component={IzmenaUsluge} />
			</div>
			<div className="footer">
					<h6>&copy;FON, 2019</h6>
			</div>
		  </div>
      </Router>
    );
  }
}

export default App;
