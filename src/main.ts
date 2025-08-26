import { Libro } from "./models/Libro";
import { Revista } from "./models/Revista";
import { Usuario } from "./models/Usuario";

// crear materiales
const libro1 = new Libro([1], "Martin fierro", "Naza", 500, "fantasía");
const libro2 = new Libro([2], "harry Potter", "Nazaarena", 310, "fantasía");
const revista1 = new Revista(3, "Vogue", "dragones", 202);

// crear usuario
const usuario1 = new Usuario(1, "Juan");

// prestar materiales
usuario1.prestar(libro1);
usuario1.prestar(revista1);

// mostrar info
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();

// polimorfismo
const materiales = [libro1, libro2, revista1];
materiales.forEach(m => m.mostrarInfo());
