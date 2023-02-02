## CURSO DESARROLLO WEB

CLASE -1-

Git: es un sistema de contro de versiones.
    permite regresar a la version anterior de un archivo apesar de haber cerrado todos los archivos

## 3 ESTADOS DE GIT:
    --> WORKING -(area de trabajo): se almacenan todos los archivos del proyecto
    --> STANDING AREA -(area de preparacion): area de preparacion, se configuran y fijan los cambios
    --> GIT DIRECTORY -(directorio de git): se encuentran los cambios confirmados.

    3.1 Estados:
        git status: nos muestra el archivo que fue modificado.
        git add . o  (nombre del archivo): nos sube todo los cambios al area de preparacion, y guarda los cambios
        git push: sube todo los archivos y cambios a el repositorio de git, guardando los cambios de forma definitiva
        git reset HEAD <nombre archivo>: nos permite sacar al archivo de la zona de preparacion


## 4 FLUJO DE TRABAJO BASICO: 
    1. Modificar una serie de archivos en el directorio de trabajo
    2. Preparar archivos en el directorio de trabajo
    3.Confirmacion de los cambios, los almacena en el area de preparacion y almacena una copia permanente en git


## 5 CICLO DE VIDA DEL ESTADO DE NUESTRO ARCHIVOS:
    --> Untraked: cuando el archivo recien se crea ni se comitea ni nada.
    --> Staged: este es el segundo estado y pasa a este estado cuando se hace un git add.
    --> Unmodified: este el tercer estado y pasa a este estado cuando realizamos un commit, este estado es sin modificar.
    --> Modified: este estado en cuando modificamos el archivo.

    ## GIT IGNORE: se utiliza cuando queremos que git ignore el archivo, es decir que no lo suba automaticamente, que no lo tenga en cuenta
    
    <!-- ## GIT DIFF: compara lo que tenemos en el area de trabajo con lo que esta en el area de preparacion. -->