import React, { Component } from 'react';
import { JedinicaMere } from '../model/JedinicaMere';
import { Usluga } from '../model/Usluga';

interface Props {
    uslugaID: number;
    jediniceMere: JedinicaMere[];
    usluge: Usluga[];
    onAdd: (usluge: Usluga) => Promise<any>;
}

interface State {
    uslugaID: number;
    nazivUsluge: string;
    opisUsluge: string;
    jedinicaMere: number;
}

class FrmZaUnosUsluge extends Component<Props, State> {

    state = {
        uslugaID: 0,
        nazivUsluge: '',
        opisUsluge: '',
        jedinicaMere: 0
    }

    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value } as any);
    }

    onAdd = async (e: any) => {
        e.preventDefault();
        const { nazivUsluge, opisUsluge, jedinicaMere } = this.state;
        if (nazivUsluge !== '' && opisUsluge !== '' && jedinicaMere != 0) {
            await this.props.onAdd(new Usluga(0,nazivUsluge, 
				opisUsluge, Number(jedinicaMere) ));
		alert('Usluga je uspešno dodata!');
        } else {
		alert('Neuspešan unos usluge!');
        }
    }
	
    onCancel = async(e: any) => {
	this.setState({uslugaID: 0,
		      nazivUsluge: '',
		      opisUsluge: '', 
		      jedinicaMere: 0});
	}

    render() {
        return (
            <form>
		<label className="col-form-label">#</label>
                	<div className="form-row">
				<div className="form-inline">
                        		<input type="text" className="form-control" 
							   name="uslugaID" 
						           value={this.props.uslugaID || ''} 
							   onChange={this.handleChange}	
							   disabled
				/>							
                    </div>
                    <div className="form-group col-md-10">
                        <label className="col-form-label">Naziv usluge</label>
                       	 	<input type="text" className="form-control" 
						   name="nazivUsluge" 
						   value={this.state.nazivUsluge} 
						   onChange={this.handleChange} 
						   required/>
                    </div>
		    <br></br>
		    <div className="form-group col-md-10">
			<label className="col-form-label">Opis usluge</label>
                        	<textarea className="form-control" 
					  name="opisUsluge" 
					  value={this.state.opisUsluge} 
					  onChange={this.handleChange}
					  required/>
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label">Jedinica mere</label>
                        <select className="custom-select form-control" 
			        name="jedinicaMere" 
				value={this.state.jedinicaMere} 
				onChange={this.handleChange}>
                            <option value="0">---</option>
                            {this.props.jediniceMere.map(jedinicaMere => <option key={jedinicaMere.sifraJM} value={jedinicaMere.sifraJM}>{jedinicaMere.nazivJM}</option>)}
                        </select>
                    </div>
                </div>
		<div className="form-row">
                    <div className="col-md-10">
			<button id="btn-cancel" className="btn btn-secondary float-right" onClick={this.onCancel}><i className="fa fa-close"></i>Poništi</button>
                        <button id="btn-add" className="btn btn-secondary float-right" onClick={this.onAdd}><i className="fa fa-plus"></i>Sačuvaj uslugu</button>
		    </div>
                </div>
            </form>	
        );
    }
}

export default FrmZaUnosUsluge;
