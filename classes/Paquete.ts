export class Paquete {
  private peso: number;
  private alto: number;
  private ancho: number;
  private largo: number;

  constructor(peso: number, alto: number, ancho: number, largo: number) {
    this.peso = peso;
    this.alto = alto;
    this.ancho = ancho;
    this.largo = largo;
  }

  get getVolumen() {
    return this.alto * this.ancho * this.largo;
  }

  get getPeso() {
    return this.peso;
  }
}
