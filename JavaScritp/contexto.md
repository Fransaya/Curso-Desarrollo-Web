# CONTEXTO.
    - Que es el contexto? es el objeto que esta ejecutando la funcion.

    - el Contexto es quien ejecuta no donde se define.

## Arrow functions
    - es una sintaxis alternativa para no usar function.
        - Tiene algunas diferencias y limitaciones con respecto a la declaracion normal de funcion.
            $ No tiene sus propios enlaces a this o super y no se debe usar como métodos.
            $ No tiene argumentos o palabras clave new.target.
            $ No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
            $ No se puede utilizar como constructor.
            $ No se puede utilizar yield dentro de su cuerpo.
    
    - Las arrow function heredan el valor del this del contexto en el que fueron creada, no se reasignan.

    - Un arrow function adopta el valor del contexto en la definicion de la funcion y no lo adopta o modifica en la ejecucion.
        en cambion una funcion declarada con function adopta el valor del contexto en la ejecucion y no en la creacion.

  ### cald y aplly :
    - Asignan un valor para this y ejecutan la funcion.
    