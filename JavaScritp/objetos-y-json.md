# OBJETOS:
   ## Que es la programacion orientada a objetos?
    -  es un paradigma de programacion que se basa en la creacion de objetos que contiene datos y funciones.
        El proposito de la programacion orientada a objetos, es que los objetos que definimos sea independientes y se puedan integrar con los demas objetos.

  ## objeto.
  - la forma de crear un obejeto en java es simpre, u si syntaxis es de la siguiente manera.
        - Sintaxis:
            let objeto={
                nombre: 'valor de la propiedad',
                nombre_propiedad:'valor prop'
            }
        - para llamar algun elemento de este objeto se puede hacer de dos formas.
            - Sintaxis 1: escribiendo el objeto seguido de un punto y el nombre de la propiedad.
                
                console.log(objeto.nombre);

            - Sintaxis 2: escribiendo el objeto continuado por llave estricta y el nombre de la propiedad entre comillas.

                console.log(objeto['nombre_propiedad]);
        
    - Un objeto es JS puede contener cualquier tipo de dato, funciones, array, booleanos, string.

    ## shorthand syntax:
        - es util cuando asignamos una variable a una propiedad con el mismo nombre.
            - Ejemplo:
            let nombre='fran';
            let usuario={nombre:nombre} == let usuario={nombre} // lo que sucede es se toma el nombre de la variable y se usa como valor de la propiedad.

    ## Duplicar o combinar objetos:
        - para combinar o duplicar objetos se utiliza el Spread operetor y el Object.assign.

        - Para duplicar un objeto usando el operador de expansion, se colocan 3 puntos antes del nombre del objeto dentro de un objeto vacio. esto genera una nueva copia del objeto.
            - Sintaxis:
            
            let user={nombre:'francisco'}

            let copia={...user} // estp va a generar una copia del objeto 
                                    user  dentro de la variable copia y va a crear un objeto.

        - Tambien me permite agregar propiedades al objeto.
            - Sintaxis:
            
            let admin={...user,permisos:true}; // esto agrega la propiedad al 
                                                objeto user y crea una copia
                                                de esto en el objeto admin.

        - Para combinar las propiedades de los objetos se realiza de la siguiente forma:
            - Sintaxis:
            
            let user={nombre:'agostina'}

            let admin={permisos:true}

            let adminuser={...user,...admin} // esto combina los dos objetos
                                             user y admin y crea un nuevo objeto con sus propiedades en la variable adminuser.
        
        - Para duplicar un objeto utilizando el Object.assign se realiza de la siguiente forma:
            - Sintaxis:

            let objet={edad:18}

            let copia=Object.assign({},objet)
    
    ## Destructuring assignment:
    - La asignacion desestructurada se utiliza para asignar las propiedades de un objeto o arreglos a distintas variables
        - Sintaxis:
            let user={name: 'francis',edad:20}
            let { name }= user // aqui se crea una variable, la cual su valor 
                                se saca del objeto user, cuyo nombre tiene que coincidir con una propiedad del objeto.

    ## Funciones Constructoras:
        - Son aquellas funciones que se utilizar para crear un objeto.
        ( cualquier funcion se puede usar para instanciar un objeto).

        

