export class Modelo {
  private volumenMax: number;
  private pesoMax: number;

  constructor(volumenMaximo: number, pesoMaximo: number) {
    this.volumenMax = volumenMaximo;
    this.pesoMax = pesoMaximo;
  }

  get getVolumenMax() {
    return this.volumenMax;
  }
  get getPesoMax() {
    return this.pesoMax;
  }
}
