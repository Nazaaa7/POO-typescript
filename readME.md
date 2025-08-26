Investigación
1. ¿Qué diferencia existe entre extends y implements en TypeScript?
**En TypeScript, extends se usa para la herencia de clases, hace que una clase herede propiedades y métodos de una clase padre, mientras que implements se usa para que una clase cumpla un contrato de una interfaz, obligándola a dar implementaciones en específico para los métodos definidos eesa clase. La principal diferencia es que extends añade comportamiento ya existente, mientras que implements exige la creación de nuevo comportamiento.**
2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?
**El tipado fuerte en funciones y clases mejora la robustez y fiabilidad del código al detectar errores de tipo en tiempo de    ejecución, previene conversiones de tipo no deseadas o inesperadas, aumenta la claridad del código al hacerlo más predecible y mejora el soporte de las herramientas de desarrollo, como los IDEs, al proporcionar autocompletado y documentación más precisa.**
3. ¿Qué significa que una clase sea abstracta?
Que una clase sea abstracta significa que no se puede usar para crear objetos directamente, sino que solo sirve para que otras clases hereden de ella.
4. ¿Por qué conviene usar getters y setters para el encapsulamiento?
**Conviene usar getters y setters para el encapsulamiento  porque permiten controlar el acceso y la modificación de los datos internos de una clase, aplicando validaciones, manteniendo la integridad de los datos y facilitando cambios en la implementación sin afectar la interfaz pública**
5. Ejemplificar cómo tipar:
*a. Una función con parámetros obligatorios y opcionales.*
function crearPerfil(nombre: string, apellido: string, edad?: number): string {
  if (edad) {
    return `Perfil de ${nombre} ${apellido}, de ${edad} años.`;
  }
  return `Perfil de ${nombre} ${apellido}.`;
} 
 en este caso, el parametro de la edad es opcional, y el nombre y apellido son obligatorios 
*b. Una función que devuelve una Promise.*

// La función `obtenerDatos` devuelve una Promise que se resolverá con un string.
function obtenerDatos(): Promise<string> {
  return new Promise((resolve, reject) => {
    // simula una operación exitosa después de un tiempo
    setTimeout(() => {
      resolve("datos cargadoss");
    }, 1000);
  });
}

//se usa la función y maneja la promesa con `.then()`
obtenerDatos()
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error(error);
  });