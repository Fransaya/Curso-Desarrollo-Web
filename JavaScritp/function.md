# FUNCIONES EN JS

 - Que es una funcion?
     una funcion en js en un conjunto de instrucciones que realiza una tarea o calcula un valor, la misma tiene una entrada y deve devolver una salida.

## Tipos de funciones:

 ### Declaracion de funcion:
 ej:
    function saludar(){
        console.log('decir hola');
    }

 ### Expresion de funcion:
 ej:
    let func=function(){}

## Scope:
    coleccion de variables que estan a tu alcance en algun punto de tu codigo, o las reglas que defienen en que parte del codigo una variable esta disponible o no.

  ## scope global: 
    puede ser utilizada en cualquier parte del codigo. (no es recomendable utilizar variable globales).
    (las variables pueden tener el mismo nombre, siempre y cuando no esten en el mismo alcanze (scope))

  ## scope local:
    permite definir variables con un alcanze limitado y controlado. 
    (cuando definimos una nueva funcion se establece un nuevo scope local, para las variables declaradas dentro de la funcion y los argumentos que recibe).
    
    - En el scope local existe dos alcances:

        ## alcance de funcion: el alcanze que tiene una variable dentro de una funcion.
        ( si utilizamos var podemos hacer que la variable este disponible tanto dentro de un bloque como para la funcion).

        ## alcance de bloque: si declaro una variable let o const dentro de un ciclo (if, for) o condicion la variable estara disponible dentro del bloque de esta estructura.
        (let y const se alojan en el bloque de codimo mas proximo).
     
## Argumento y Parametros:

    $ Argumento: en la variable que se envia al llamar la funcion.
        ( el valor que se envia o llena el parametro).

    $ Parametro: es el variable que se coloca en la definicion de la funcion
        (algo que tiene que ser llenado cuando se llama una funcion).

    Ejemplo:
        function Cuadrado(numero)--> Parametro{
            return numero*numero;
        }
        Cuadrado(2)--> Argumento.

## Pase por valor y por referencia.

    $$ por valor:  pasa una copia de una variable como parametro de las funciones.
    ( el valor de un parametro de la funcion se copia en otra variable)

    $$ por referencia: pasa por la referencia de un parametro al que se llama.
    ( el que 'llama' y el que recibe la 'llamada' hacen referencia y utilizan la misma variable para el parametro)
    (se pasan/copia los parametros reales a la funcion.)

## Funciones puras:
    // es aquella que no produce efectos secundarios.

    -Ejemplo:

    let edades=[20] ; 

    function modificacion(edades){
        let copia=[edades]; // genera una copia para la variable
        copia[0]=25;// asgina el valor a la copia, es decir modifica la copia y no el valor original
        return copia;// devuelve el valor asginado a la copia para comunicar los cambios
    }
    // no modifica el valor original de la variables edades, lo que hace es dentro de la funcion, crear una copia para guardar esa modificacion.

    - Mutacion: es un cambio sobre la referencia original (modificacion a un valor)

## Fist class object:
 - las funciones son first class object cuando las funciones son tratadas como cualquier otra variable.
    (- para que un dato pueda ser un firts class object debe de poder:
        - ser posible retornarlo.
        - se debe poder asignarlo a una variable..
        - debe permitir que sea enviado como argumento.)

    ## Ejemplo asignar funcion a una variable:

    let llamar= function(){
        console.log('hola');
    }
    // invoco la funcion utilizando la variable a la cual se la asgine
    llamar(); // aqui muestra el resultado de la funcion.


 
