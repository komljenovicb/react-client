import { JedinicaMere } from "./JedinicaMere";


export class Usluga {

    uslugaID: number;

    nazivUsluge: string;

    opisUsluge: string;

    jedinicaMere: number;

    constructor(uslugaID: number, nazivUsluge: string, opisUsluge: string, jedinicaMere: number) {
        this.uslugaID = uslugaID;
        this.nazivUsluge = nazivUsluge;
        this.opisUsluge = opisUsluge;
        this.jedinicaMere = jedinicaMere;
    }
	
}