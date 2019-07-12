import { Zaduzenje } from './Zaduzenje';

export class Zaposleni {
	
	zaposleniID: number;
	
	ime: string;
	
	prezime: string;
	
	zaduzenje: number;
	
	constructor(zaposleniID: number, ime: string, prezime: string, zaduzenje: number) {
		this.zaposleniID = zaposleniID;
		this.ime = ime;
		this.prezime = prezime;
		this.zaduzenje = zaduzenje;
	}
	
}