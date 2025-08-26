import { Material } from "../models/Material"; //importar los materiales

 interface IUsuario {
  id: number;
  nombre: string;

  prestar(material: Material): void;
}

export { IUsuario }; // exportar usuarios