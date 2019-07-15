import React, { Component } from 'react';
import '../App.css';
import { Usluga } from '../model/Usluga';
import FrmZaIzmenuUsluge from '../components/FrmZaIzmenuUsluge';
import { JedinicaMere } from '../model/JedinicaMere';
import { vratiSveUsluge, vratiSveJM, obrisiUslugu, izmeniUslugu, vratiUslugu } from '../service/api';


interface State {
  uslugaID: number;
  nazivUsluge: string;
  opisUsluge: string;
  jedinicaMere: number;
  usluge: Usluga[];
  jediniceMere: JedinicaMere[];
  error: string;
}

class Nova extends Component<{}, State> {

  state = {
    usluge: [],
    uslugaID: 0,
    nazivUsluge: '',
    opisUsluge: '',
    jedinicaMere: 0,
    jediniceMere: [],
    selectedRow: null,
    error: ''
  }
 
  async vratiJediniceMere() {
    try {
      this.setState({jediniceMere: await vratiSveJM()});
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    await this.vratiJediniceMere();
  }
  
  onUpdate = async (usluge: Usluga) => {
    try {
      let res = await izmeniUslugu(usluge);
      if(res.error) { 
	    this.setState({error: res.error});
	  }
      else {
            this.setState({usluge: [...this.state.usluge, {...res, 
	    jedinicaMere: res.jedinicaMere.sifraJM}]});
	  }
    } catch(e) {
      this.setState({error: "Network error"});
    }
  }
  
  onFind = async (nazivUsluge: string) => {
    try {
      let res = await vratiUslugu(nazivUsluge);
      if(res.error) this.setState({error: res.error});
      else {
	   const usl = new Usluga(res.uslugaID, res.nazivUsluge, res.opisUsluge, res.jedinicaMere);
	   return usl;
      }
    } catch(e) {
      this.setState({error: "Network error"});
    }
  }
  
  onDelete = async (id : number) => {
    try {
      await obrisiUslugu(id);
      this.setState({
        usluge: this.state.usluge.filter((usl: Usluga) => usl.uslugaID !== id)
      });
    } catch(e) {
      this.setState({error: "Network error"});
	}
  }
  
  render() {
    return (
      <>
        <div className="container">
          <h2 className="display-4">Izmena usluge</h2>
		  <div className="row">  
            <FrmZaIzmenuUsluge 
	      uslugaID={this.state.uslugaID}
	      opisUsluge={this.state.opisUsluge}
	      nazivUsluge={this.state.nazivUsluge}
              jedinicaMere={this.state.jedinicaMere}
              jediniceMere={this.state.jediniceMere}
              usluge={this.state.usluge}
              onUpdate={this.onUpdate}
	      onFind={this.onFind}
              onDelete={this.onDelete}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Nova;
