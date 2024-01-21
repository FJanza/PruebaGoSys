export class Locacion {
  private direccion: string;
  private latitud: number;
  private longitud: number;

  constructor(direccion: string, latitud: number, longitud: number) {
    this.direccion = direccion;
    this.latitud = latitud;
    this.longitud = longitud;
  }

  get getLongitud() {
    return this.longitud;
  }
  get getLatitud() {
    return this.latitud;
  }
  get getDireccion() {
    return this.direccion;
  }
}
