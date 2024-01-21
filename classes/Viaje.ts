import {getDistanceBetweenPoints} from "../helpers/distance";
import {Locacion} from "./Locacion";
import {Paquete} from "./Paquete";

export abstract class Viaje {
  protected paquetes: Paquete[];
  protected origen: Locacion;
  protected destino: Locacion;

  constructor(paquetes: Paquete[], origen: Locacion, destino: Locacion) {
    this.paquetes = paquetes;
    this.origen = origen;
    this.destino = destino;
  }

  get getDistancia() {
    return getDistanceBetweenPoints(
      this.origen.getLatitud,
      this.origen.getLongitud,
      this.destino.getLatitud,
      this.destino.getLongitud
    );
  }

  get getPeso() {
    return this.paquetes.map((p) => p.getPeso).reduce((acc, cur) => acc + cur);
  }

  get getVolumen() {
    return this.paquetes
      .map((p) => p.getVolumen)
      .reduce((acc, cur) => acc + cur);
  }
  abstract get getCosto(): number;
}

export class ViajeNormal extends Viaje {
  constructor(paquetes: Paquete[], origen: Locacion, destino: Locacion) {
    super(paquetes, origen, destino);
  }
  get getCosto() {
    return 2 * super.getDistancia * super.getPeso;
  }
}
export class ViajePrioritario extends Viaje {
  constructor(paquetes: Paquete[], origen: Locacion, destino: Locacion) {
    super(paquetes, origen, destino);
  }
  get getCosto() {
    const resultado1 = 4 * super.getPeso * super.getDistancia;
    const resultado2 = 10 * super.getVolumen * super.getDistancia;
    return resultado1 > resultado2 ? resultado1 : resultado2;
  }
}
export class ViajeDevolucion extends Viaje {
  constructor(paquetes: Paquete[], origen: Locacion, destino: Locacion) {
    super(paquetes, origen, destino);
  }
  get getCosto() {
    return 1000;
  }
}
