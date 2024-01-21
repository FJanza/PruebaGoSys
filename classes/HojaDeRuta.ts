import {Modelo} from "./Modelo";
import {Viaje} from "./Viaje";

export class HojaDeRuta {
  private hojasDeRuta: HojaDeRuta[];
  private viajes: Viaje[];

  constructor(hojasDeRuta: HojaDeRuta[], viajes: Viaje[]) {
    this.hojasDeRuta = hojasDeRuta;
    this.viajes = viajes;
  }

  get getViajes() {
    const viajesAux: Viaje[] = [...this.viajes];
    if (this.hojasDeRuta.length > 0) {
      this.hojasDeRuta.forEach((hdr) => {
        viajesAux.push(...hdr.getViajes);
      });
    }
    return viajesAux;
  }

  get getCosto() {
    const viajesAux = this.getViajes;

    let costo = 0;

    viajesAux.forEach((viaje) => {
      costo += viaje.getCosto;
    });
    return costo;
  }

  public isPosibleForModel(modelo: Modelo) {
    let volumenTotal = 0;
    let pesoTotal = 0;

    this.getViajes.forEach((viaje) => {
      volumenTotal += viaje.getVolumen;
      pesoTotal += viaje.getPeso;
    });

    return (
      modelo.getPesoMax >= pesoTotal && modelo.getVolumenMax >= volumenTotal
    );
  }
}
