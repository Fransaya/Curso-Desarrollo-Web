# CURSO DESARROLLO JAVA SCRIPT
 
## Tipos de datos:
  1. string: palabras, cadenas de caracteres.
  2. numbers: numeros, (enteros, flotantes, con coma)
  3. boolean:  tiene dos valores, true or false.
  4. null: no tiene valor, no contiene nada.
  5. undefined: no tiene un valor definido.

# Condicionales:
 Los condicionales permite cambiar la ejecucicion del codigo, dependiendo de ciertas condiciones que se le dan. (esto son los condicionales.)
 ### Ejemplo:
 if (condicion){
    // se ejecuta el codigo si la condicion se cumple
    - Bloque de codigo.
 }
 -- la condicion puede ser cualquier expresion que al ser evaluada puede devolver verdadero (true) o false (false).
# Ciclos:
 * Los bucles (loops) realizan y se utilizan para realizar tareas repetitivas en base a una condicion. (las condiciones devuelven true or false) y el bucle se continua ejecutando hasta que la condicion se vuelva false.

 ## Existen 3 tipos mas comunes de bucles.
 1. for:
  - Sintaxis: for ([initializacion];[condition];[expresion-final]){
    // sentencia 
    Bloque de codigo.
  }
  - [inicializacion]: sucede antes de la primera ejecucion del bucle. se utiliza para crear un controlador. (las variables creadas tiene un alcance (scope) limitado al bucle.)
  - [condicion]: es una expresion que se evalua antes de cada iteracion.(si devuelve true, la sentencia continua, si devuelve false, el bucle se detiene.)
  )
  - [expresion-final]: es una expresion que se ejecuta luego de cada iteracion (se utiliza para incrementar un controlar, o decrementar)

  - sentencia: condigo que sera ejecutado por el bucle.
 

# Funciones o Function
 Agrupa codigo, para poder ejecutarlos varias veces.


 ## Declaracion de funciones:
 - Sintaxis:
 // function saludar(){
    console.log('hola como te va);
 };
 saludar(); // ejecuta la funcion.

 // function operaciones(numero){
    return numero*numero
 }
 let numeros=operaciones(numero como argumento)// asigna a numeros, el resultado de la funcion.

 // terminar los videos de js y practicas js
