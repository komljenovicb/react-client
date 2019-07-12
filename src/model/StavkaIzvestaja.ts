export class StavkaIzvestaja {
	
	rbrIzvestaja: number;
	
	rbrStavke: number;
	
	datum: Date;
	
	dan: string;
	
	brojDorucaka: number;

	constructor(rbrIzvestaja: number, rbrStavke: number, datum: Date, dan: string, brojDorucaka: number) {
        this.rbrIzvestaja = rbrIzvestaja;
		this.rbrStavke = rbrStavke;
        this.datum = datum;
		this.dan = dan;
		this.brojDorucaka = brojDorucaka;
    }
	
}

