import { Material } from "./Material";

export class Revista extends Material {
  edicion: number;

  constructor(id: number, titulo: string, autor: string, edicion: number) {
    super([id], titulo, autor);
    this.edicion = edicion;
  }

  mostrarInfo(): void {
    console.log(`revista: "${this.titulo}" de ${this.autor}, edición Nº${this.edicion}`);
  }
}
