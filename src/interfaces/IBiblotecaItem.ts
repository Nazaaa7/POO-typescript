interface IBibliotecaItem { //crear interfaz de la biblioteca
  id: readonly number[];
  titulo: string;
  autor: string;

  mostrarInfo(): void; //metoddo que se usa en la biblioteca
}
export  { IBibliotecaItem };