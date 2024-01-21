import {HojaDeRuta} from "./HojaDeRuta";
import {Modelo} from "./Modelo";

export class Camion {
  private patente: string;
  private modelo: Modelo;

  private hojaDeRuta: HojaDeRuta;

  constructor(patente: string, modelo: Modelo, hojaDeRuta: HojaDeRuta) {
    this.patente = patente;
    this.modelo = modelo;

    if (!hojaDeRuta.isPosibleForModel(this.modelo)) {
      throw new Error(
        `No es posible esa ruta para el modelo del camión ${this.patente}`
      );
    }
    this.hojaDeRuta = hojaDeRuta;
  }

  get getPesoMax() {
    return this.modelo.getPesoMax;
  }
  get getVolumenMax() {
    return this.modelo.getVolumenMax;
  }

  set setNewHojaDeRuta(hojaDeRuta: HojaDeRuta) {
    if (!hojaDeRuta.isPosibleForModel(this.modelo)) {
      throw new Error(
        `No es posible esa ruta para el modelo del camión ${this.patente}`
      );
    }
    this.hojaDeRuta = hojaDeRuta;
  }
}
