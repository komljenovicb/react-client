import React, { Component } from 'react';
import { JedinicaMere } from '../model/JedinicaMere';
import { Usluga } from '../model/Usluga';

interface Props {
    uslugaID: number;
    nazivUsluge: string;
    opisUsluge: string;
    jedinicaMere: number;
    jediniceMere: JedinicaMere[];
    usluge: Usluga[];
    onUpdate: (usluge: Usluga) => Promise<any>;
    onFind: (nazivUsluge: string) => Promise<any>;
    onDelete: (uslugaID: number) => Promise<any>;
}

interface State {
    uslugaID: number;
    nazivUsluge: string;
    opisUsluge: string;
    jedinicaMere: number;
}

class FrmZaIzmenuUsluge extends Component<Props, State> {

    state = {
        uslugaID: 0,
        nazivUsluge: '',
        opisUsluge: '',
        jedinicaMere: 0,
    }


    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value } as any);
    }

    onUpdate = async (e: any) => {
        e.preventDefault();
        const {uslugaID, nazivUsluge, opisUsluge, jedinicaMere } = this.state;
        if (uslugaID != 0 && nazivUsluge !== '' && opisUsluge !== '' && jedinicaMere != 0) {
            await this.props.onUpdate(new Usluga(uslugaID, nazivUsluge, 
				opisUsluge, Number(jedinicaMere)));
		alert('Usluga sa ID-jem ' + this.state.uslugaID + ' je izmenjena');
        } else {
		alert('Neuspešna izmena usluge!');
	}
    }
	
    onFind = async (e: any) => {
	e.preventDefault();
	const kriterijum = this.state.nazivUsluge;
	if (kriterijum != '') {
		const usl = await this.props.onFind(kriterijum);
		if(usl != null) {
			this.setState({ uslugaID: usl.uslugaID, nazivUsluge: usl.nazivUsluge,
								opisUsluge: usl.opisUsluge, 
								jedinicaMere: usl.jedinicaMere.sifraJM});
		}
        } else {
		alert('Unesite naziv usluge!');
	        }
	}

    onDelete = async(e: any) => {
		alert('Usluga sa ID-jem ' + this.state.uslugaID + ' je obrisana');
       		e.preventDefault();
		const id = this.state.uslugaID;
        	await this.props.onDelete(id);
		this.setState({uslugaID: 0, nazivUsluge: '',
					    opisUsluge: '', 
					    jedinicaMere: 0});
	}
	
    onCancel = async(e: any) => {
		this.setState({uslugaID: 0, nazivUsluge: '',
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
							   value={this.state.uslugaID || ''} 
							   onChange={this.handleChange}	
							   disabled
					/>							
                    	</div>
			<div className="form-group col-md-10">
                        <label className="col-form-label">Unesite naziv usluge:</label>
                        <input type="text" className="form-control" 
							    name="nazivUsluge" 
							    value={this.state.nazivUsluge} 
							    onChange={this.handleChange} 	
							    required
						/>	
						<br></br>
						<button id="btn-find" className="btn btn-secondary float-right" 
							onClick={this.onFind}>
							<i className="fa fa-search">
							</i>Pronađi uslugu</button>
                    	</div>
			<div className="form-group col-md-10">
				<label className="col-form-label">Opis usluge</label>
                        		<textarea className="form-control" 
							 name="opisUsluge" 
						         value={this.state.opisUsluge} 
							 onChange={this.handleChange}
							 required/>
                    </div>
                    <div className="form-group col-md-2.5">
                        <label className="col-form-label">Jedinica mere</label>
                        <select className="custom-select form-control" 
								name="jedinicaMere" 
								value={this.state.jedinicaMere} 
								onChange={this.handleChange}>
                            <option value="0">---</option>
                            {this.props.jediniceMere.map(jedinicaMere => <option key={jedinicaMere.sifraJM} 
																				 value={jedinicaMere.sifraJM}>{jedinicaMere.nazivJM}</option>)}
                        </select>
                    </div>
                </div>
		<div className="form-row">
                    <div className="col-md-10">   
				<button id="btn-change" 
					className="btn btn-secondary float-right" 
					onClick={this.onCancel}><i className="fa fa-close">
					</i>Poništi</button>
					<button id="btn-obrisi" className="btn btn-secondary float-right" 
						onClick={this.onDelete}>
						<i className="fa fa-minus">
						</i>Obriši uslugu</button>
					<button id="btn-add" className="btn btn-secondary float-right" 
							     onClick={this.onUpdate}><i className="fa fa-plus">
					</i>Sačuvaj uslugu</button>
		   </div>
                </div>
            </form>	
        );
    }
}

export default FrmZaIzmenuUsluge;
