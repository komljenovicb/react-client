import React, { Component } from 'react';
import '../App.css';
import { Usluga } from '../model/Usluga';
import FrmZaUnosUsluge from '../components/FrmZaUnosUsluge';
import { JedinicaMere } from '../model/JedinicaMere';
import { vratiSveUsluge, vratiSveJM, sacuvajUslugu, vratiIDUsluge } from '../service/api';
import { useAlert } from 'react-alert'

interface State { 
  uslugaID: number;
  usluge: Usluga[];
  jediniceMere: JedinicaMere[];
  error: string;
}
class UnosUsluge extends Component<{}, State> {

  state = {
	uslugaID: 0,
    usluge: [],
    jediniceMere: [],
    selectedRow: null,
    error: '',
  }

  async vratiIDUsluge() {
	try {
      this.setState({uslugaID: await vratiIDUsluge()});
    } catch (e) {
      console.log(e);
    }
  }
  
  async vratiSveJM() {
    try {
      this.setState({jediniceMere: await vratiSveJM()});
    } catch (e) {
      console.log(e);
    }
  }
  
  async componentDidMount() {
	await this.vratiIDUsluge();
    await this.vratiSveJM();
  }
  
  onAdd = async (usluge: Usluga) => {
    try {
      let res = await sacuvajUslugu(usluge);
      if(res.error) {
		  this.setState({error: res.error});
	  } else {
		  this.setState({usluge: [...this.state.usluge, {...res, jedinicaMere: res.jedinicaMere.sifraJM}]});
		 
	  }
    } catch(e) {
      this.setState({error: "Network error"});
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="display-4">Unos usluge </h1>
		  <div className="row">
            <FrmZaUnosUsluge
			  uslugaID={this.state.uslugaID}
              jediniceMere={this.state.jediniceMere}
              usluge={this.state.usluge}
              onAdd={this.onAdd}
            />
          </div>
        </div>
      </>
    );
  }
}

export default UnosUsluge;