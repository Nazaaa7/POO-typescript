import { IUsuario } from "../interfaces/IUsuario";
import { Material } from "./Material";

export class Usuario implements IUsuario {
  id: number;
  nombre: string;
  private materialesPrestados: Material[] = [];
  private ultimaPrestacion!: Material; //not null
  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (material.isDisponible) {
      this.materialesPrestados.push(material);
      this.ultimaPrestacion = material;
      material.setDisponible = false;
      console.log(`${this.nombre} ha prestado "${material.titulo}".`);
    } else {
      console.log(`El material "${material.titulo}" no está disponible.`);
    }
  }

  mostrarPrestados(): void {
    console.log(`materiales prestados por ${this.nombre}:`);
    this.materialesPrestados.forEach(m => m.mostrarInfo());
  }

  mostrarUltimaPrestacion(): void {
    console.log(`ultima presentacion:  ${this.nombre}:`);
    this.ultimaPrestacion.mostrarInfo();
  }
}
