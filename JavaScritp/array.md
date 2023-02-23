# ARRAY O ARREGLO;
    (es una coleccion de datos que se pueden procesar en conjunto).
    - se delcaran con [];
 ##  Definicion:
    - Pueden almacenar cualququier tipo de dato de primera clase, funciones, objetos, numeros, cadenas, booleanos e incluso otros arreglos.
    - Tiene una propiedad que es su longitud, que es igual a la cantidad de elementos que el mismo contenga.
    - las posiciones del arreglo inician desde 0, por eso el primer elemento del arreglo tiene indice 0.
    - la ultima posicion del arreglo es igual a la longitud del arreglo, menos uno. (el menos 1 se debe a que la cuenta de arreglo inicia en 0).

 - Ejemplo:
    let arreglo=[1,2,3,4,'hola',false];

   ## Recorrer un arreglo
      - Existen diferentes formas de recorrer un arreglo: de la forma mas basica con un ciclo for.
         - Ejemplo: CICLO FOR:
            var array=[1,2,3,4,5,6,7,8,9]// creamos el arreglo
            for (var i=0;i<array.length;i++){ >// de esta forma se recorre un arreglo con el metodo for, estableciendo una variable como indice para el arreglo.
               console.log(array[i]); // aqui se muestras los valores a medida que se recorre el arreglo.
            }
      - Otra forma de recorrer un arreglos es con el metodo foreach, este permite recorrer un arreglo escribiendo una sola linea de codigo, de forma simplificada.
         - Sintaxis: 
            arreglo.forEach(function(elemento, indice, array){ // aqui utilizamos el metodo for each para recorrer el arreglo y establecemos parametros.
               console.log(elemento, indice); // aqui hacemos que muestro esos elementos que establecimos como argumento en el forEach.
            });
         - Ejemplo:
         // creamos el arreglo.
        var frutas=['manzana','banana','pera','melon']
         // utilizamos forEach para recorrer el array.
         frutas.forEach(function(elemento, indice){
            console.log(elemento, indice); // esto va a devolver los elementos dentro del array junto con sus indices
         });       

   ## Modificar un arreglo con map;
      - genera un nuevo arreglo despues de aplicar una modificacion  para cada uno de los elementos de la coleccion original.

         - Sintaxis: 
            var nuevoArr=arraay.map(function(valorActual,indice,array){
               // elemento que se quiere devolver del nuevo array y/o modificacion que se quiere realizar.
            });

         - Ejemplo:
         var numeros=['1','2','3','6']; // tenemos un array con numeros string;
         numeros=numeros.map(function(numstring){ // utilizamos el metodo map para que los numeros en string, se conviertas en numeros.
            return parseInt(numstring) // devolvemos el nuevo array con los numeros modificados.
         })
         console.log(numeros) // mostramos el resultado de el array modificado.
   
   ## Metodo filter:
      - sirve para quitar elementos de un arrglo aplicando un filtro.

         - El metodo filter evalua lo que la funcion retorna, si el retorno de la funcion es un valor verdadero, se conserva el elemento, sino se elimina

      - Sintaxis:
         let numero=[8,3,4,10,5,3,8];// creamos el arreglo con numeros

         let nuevoarr=numero.filter(function(numero){ // implementamos el metodo filter para saber que numeros son pares
            return numero%2===0; // devulve los numeros cuyo resto sea === a 0, es decir que sean par.
         })

         console.log(nuevoarr) // mostramos el resultado.

   ## Metodo Reduce
      - Permite aplicar una operacion de reccion a un arreglo para devolver un solo elemento.

         - Sintaxis:
            let arr=[1,2,3,4,5];// declaramos el arreglo.

            let suma=arr.reduce(function(acc, elemento){ // estabelemos el metodo reduce para que al recorrer el arreglo se sumen todos los elementos del mismo.
               return acc + elemento // devulve la suma de todos los elementos en un solo numero.
            })
            
            console.log(suma) // muestra el resultado.

            ( el resultado de reduce es lo que se ejecute en la ultima iteracion.)






