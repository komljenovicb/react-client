import { SluzbaOdrzavanja } from "./SluzbaOdrzavanja";

export class SluzbaZaInventar {

    sluzbaID: number;

    naziv: string;
	
    constructor(sluzbaID: number, naziv: string) {
        this.sluzbaID = sluzbaID;
        this.naziv = naziv;
    }
	
}