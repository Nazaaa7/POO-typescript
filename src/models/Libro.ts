import { Material } from "./Material";

export class Libro extends Material { //clase heredada de Material 
  paginas: number;
  genero?: string;

  constructor(id: readonly number[], titulo: string, autor: string, paginas: number, genero?: string) { 
    super(id, titulo, autor); //super indica que llame al constructor de la clase padre, o sea, a Material, propiedades de Material
    this.paginas = paginas; //propiedades propias de Libro
    this.genero = genero;
  }

  mostrarInfo(): void { //metodo de la interfaz biblioteca
    console.log(`Libro: "${this.titulo}" de ${this.autor}, ${this.paginas} paginas. ${this.genero ? "genero: " + this.genero : ""}`);
  }
}
