import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IzmenaUsluge from './pages/IzmenaUsluge';
import UnosUsluge from './pages/UnosUsluge';
import PretragaIzvestaja from './pages/PretragaIzvestaja';
import IzmenaIzvestaja from './pages/IzmenaIzvestaja';
import UnosIzvestaja from './pages/UnosIzvestaja';
import PrikazIzvestaja from './pages/PrikazIzvestaja';
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
					<li>
						<Link to="/pretragaizvestaja" className="nav-link">Pretraga izveštaja</Link>
					</li>
					<li>
						<Link to="/unosizvestaja" className="nav-link">Unos izveštaja</Link>
					</li>
					<li>
						<Link to="/izmenaizvestaja" className="nav-link">Izmena izveštaja</Link>
					</li>
					<li>
						<Link to="/prikazizvestaja" className="nav-link">Prikaz izveštaja</Link>
					</li>						
				  </ul>
				</div>
			  </nav>
			  <Route path="/unosusluge" component={UnosUsluge} />
			  <Route path="/izmenausluge" component={IzmenaUsluge} />
			  <Route path="/pretragaizvestaja" component={PretragaIzvestaja} />
			  <Route path="/unosizvestaja" component={UnosIzvestaja} />
			  <Route path="/izmenaizvestaja" component={IzmenaIzvestaja} />
			  <Route path="/prikazizvestaja" component={PrikazIzvestaja} />
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