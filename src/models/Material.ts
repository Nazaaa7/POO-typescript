import { IBibliotecaItem } from "../interfaces/IBiblotecaItem";

 abstract class Material implements IBibliotecaItem { //clase abstracta que implementa la interfaz 
  readonly id: readonly number[];  
  titulo: string;
  autor: string;
  protected disponible: boolean;

  constructor(id: readonly number[], titulo: string, autor: string) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true; // disponible por defecto
  }

  abstract mostrarInfo(): void; //metodo abstarcto 

  get isDisponible(): boolean {
    return this.disponible;
  }

  set setDisponible(valor: boolean) {
    this.disponible = valor;
  }
}

export { Material }; //exportar la clase 