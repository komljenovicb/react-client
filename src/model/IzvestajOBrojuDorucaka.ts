import { Restoran } from "../model/Restoran";
import { Zaposleni } from "../model/Zaposleni";
import { StavkaIzvestaja } from "../model/StavkaIzvestaja";

export class IzvestajOBrojuDorucaka {

    rbrIzvestaja: number;

    datumOd: Date;

    datumDo: Date;
	
    ukupanBrojDorucaka: number;
	
    status: string;
	
    zaposleni: number;
	
    restoran: number;
	
    stavkeIzvestaja: StavkaIzvestaja[];
	
	
    constructor(rbrIzvestaja: number, datumOd: Date, datumDo: Date,
		ukupanBrojDorucaka: number, status: string, zaposleni: number,
		 restoran: number, stavkeIzvestaja: StavkaIzvestaja[]) {
        this.rbrIzvestaja = rbrIzvestaja;
        this.datumOd = datumOd;
        this.datumDo = datumDo;
	this.ukupanBrojDorucaka = ukupanBrojDorucaka;
	this.status = status;
	this.zaposleni = zaposleni;
	this.restoran = restoran;
	this.stavkeIzvestaja = stavkeIzvestaja;
    }
}
