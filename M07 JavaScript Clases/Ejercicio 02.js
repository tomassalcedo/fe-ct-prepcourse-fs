/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre,apellido,edad,domicilio){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function(){
         //let persona; 
         //persona = Persona.create(Persona.prototype);
         //persona = Persona.assign(persona,this.nombre,this.apellido,this.edad,this.domicilio);
         let persona = {
            nombre : this.nombre,
            apellido : this.apellido,
            edad: this.edad,
            domicilio: this.domicilio
         };
         return persona;
      }
   }
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   let tomi;
   tomi = new Persona(nombre,apellido,edad,domicilio);
   return tomi;
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function(){
      return this.nombre + ", " + this.edad + " años";
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
