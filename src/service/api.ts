import { Usluga } from "../model/Usluga";
import { IzvestajOBrojuDorucaka } from "../model/IzvestajOBrojuDorucaka";

const baseUrl = "http://localhost:8080/FpisWS/";

// USLUGA
export async function vratiSveUsluge() {
    let res = await fetch(baseUrl + "/usluga");
    let usluge = await res.json();
    return usluge.map((usl: any) => ({...usl, jedinicaMere: usl.jedinicaMere.sifraJM}));
}

export async function vratiSveJM() {
    let res = await fetch(baseUrl + "/jedinicamere");
    return await res.json();
}

export async function vratiIDUsluge() {
	let res = await fetch(baseUrl + "/usluga");
	return res.json();
}

export async function sacuvajUslugu(usluge: Usluga) {
    let { uslugaID, ...usl } = usluge;
    let res = await fetch(baseUrl + "/usluga", {
        method: 'POST',
        body: JSON.stringify(usl),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

export async function vratiUslugu(nazivUsluge: string) {
	let res = await fetch(baseUrl + `/usluga/${nazivUsluge}`);
	return await res.json();                                                                                                                                                       
}

export async function izmeniUslugu(usluge: Usluga) {
    let { uslugaID, ...usl } = usluge;
    let res = await fetch(baseUrl + `/usluga/${uslugaID}`, {
        method: 'PUT',
        body: JSON.stringify(usl),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json(); 
}

export async function obrisiUslugu(uslugaID: number) {
    let res = await fetch(baseUrl + `/usluga/${uslugaID}`, {
        method: 'DELETE'
    });
}

// IZVESTAJ O BROJU DORUCAKA
export async function pretrazi(datumOd: Date, datumDo: Date) {
    let res = await fetch(baseUrl + "/izvestaj");
	return await res.json();
}

export async function dajSveIzvestaje() {
    let res = await fetch(baseUrl + "/izvestaj");
    return await res.json();
}

export async function vratiSveRestorane() {
    let res = await fetch(baseUrl + "/restoran");
    return await res.json();
}

export async function vratiSveZaposlene() {
    let res = await fetch(baseUrl + "/zaposleni");
    return await res.json();
}


export async function sacuvajIzvestaj(i: IzvestajOBrojuDorucaka) {
    let { rbrIzvestaja, ...izv } = i;
    let res = await fetch(baseUrl + "/izvestaj", {
        method: 'POST',
        body: JSON.stringify(izv),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

export async function izmeniIzvestaj(i: IzvestajOBrojuDorucaka) {
    let { rbrIzvestaja, ...izv } = i;
    let res = await fetch(baseUrl + `/izvestaj/${rbrIzvestaja}`, {
        method: 'PATCH',
        body: JSON.stringify(izv),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json(); 
}
