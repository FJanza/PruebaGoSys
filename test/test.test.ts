import {Camion} from "../classes/Camion";
import {HojaDeRuta} from "../classes/HojaDeRuta";
import {Locacion} from "../classes/Locacion";
import {Modelo} from "../classes/Modelo";
import {Paquete} from "../classes/Paquete";
import {ViajeDevolucion, ViajeNormal, ViajePrioritario} from "../classes/Viaje";
import {describe, expect, test} from "@jest/globals";

const locacion1 = new Locacion("obelisco", -34.60376, -58.38162);
const locacion2 = new Locacion("gosys", -34.5360879, -58.466915);

const paquete1 = new Paquete(100, 10, 1, 10);
const paquete2 = new Paquete(100, 10, 1, 10);
const paquete3 = new Paquete(100, 10, 1, 10);

const paquetes = [paquete1, paquete2, paquete3];

const viaje1 = new ViajeNormal(paquetes, locacion1, locacion2); // 6504
const viaje2 = new ViajeDevolucion(paquetes, locacion1, locacion2); // 1000
const viaje3 = new ViajePrioritario(paquetes, locacion1, locacion2); // 32520

const hojaRuta = new HojaDeRuta([], [viaje1, viaje2, viaje3]);
const hojaRuta2 = new HojaDeRuta([hojaRuta], [viaje1, viaje2, viaje3]);
const hojaRuta3 = new HojaDeRuta([], [viaje2]);

const modelo1 = new Modelo(50000, 500);
const modelo2 = new Modelo(60000, 900);

// Casos de prueba

describe("Pruebas modelos POO", () => {
  describe("Prueba con Camiones", () => {
    test("Prueba crear camión con hoja de ruta aceptada para ese modelo", () => {
      const Mack = new Camion("MAK210", modelo1, hojaRuta3);
      expect(Mack instanceof Camion).toBe(true);
    });

    test("Prueba cambiar la hoja de ruta en un camión", () => {
      const Mack2 = new Camion("MAK220", modelo2, hojaRuta);
      expect(Mack2 instanceof Camion).toBe(true);
      Mack2.setNewHojaDeRuta = hojaRuta3;
      expect(Mack2 instanceof Camion).toBe(true);
    });

    test("Prueba crear camión con hoja de ruta no aceptada para ese modelo", () => {
      function CrearCamionDefectuoso() {
        const Mack = new Camion("MAK210", modelo1, hojaRuta2);
      }
      expect(CrearCamionDefectuoso).toThrowError(
        new Error("No es posible esa ruta para el modelo del camión MAK210")
      );
    });

    test("Prueba cambiar la hoja de ruta por una no apta para el modelo", () => {
      const Mack = new Camion("MAK210", modelo1, hojaRuta3);

      function CambiarHojaDeRuta() {
        Mack.setNewHojaDeRuta = hojaRuta2;
      }

      expect(Mack instanceof Camion).toBe(true);

      expect(CambiarHojaDeRuta).toThrowError(
        new Error("No es posible esa ruta para el modelo del camión MAK210")
      );
    });
  });

  describe("Pruebas con hoja de ruta", () => {
    test("Calculo de costo de hojas de ruta", () => {
      expect(hojaRuta.getCosto).toBe(40024);
      expect(hojaRuta2.getCosto).toBe(80048);
      expect(hojaRuta3.getCosto).toBe(1000);
    });
  });
});
