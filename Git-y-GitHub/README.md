# CURSO DESARROLLO WEB

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


### 4 FLUJO DE TRABAJO BASICO: 
    1. Modificar una serie de archivos en el directorio de trabajo
    2. Preparar archivos en el directorio de trabajo
    3.Confirmacion de los cambios, los almacena en el area de preparacion y almacena una copia permanente en git


## 5 CICLO DE VIDA DEL ESTADO DE NUESTRO ARCHIVOS:
    --> Untraked: cuando el archivo recien se crea ni se comitea ni nada.
    --> Staged: este es el segundo estado y pasa a este estado cuando se hace un git add.
    --> Unmodified: este el tercer estado y pasa a este estado cuando realizamos un commit, este estado es sin modificar.
    --> Modified: este estado en cuando modificamos el archivo.

    ## GIT IGNORE: se utiliza cuando queremos que git ignore el archivo, es decir que no lo suba automaticamente, que no lo tenga en cuenta

    ## GIT DIFF: compara lo que tenemos en el area de trabajo con lo que esta en el area de preparacion. 

## PASOS PARA APORTAR EN OTRO REPOSITORIO
    1. hcaer un fork en GitHub.
    2. Clonar el repositorio desde mi cuenta de GitHub.
    3. Crear una rama local.
    4. Realizar mis cambios en mi nueva rama local.
    5. Confirmar los cambios realizados en local.
    6. Hacer push de mis cambios (enviar los commits locales a GitHub) 'git push origin <nombre de la rama>'.
    7. Crear un pull request con la nueva rama con mi repositorio en GitHub.
    8. Esperar a que el administrador del repositorio original acepte mis cambios. 


## VARIOS REPOSITORIOS REMOTOS.
    Se puede configurar un mismo proyecto para sincronizar cambios con varios repositorios remotos.


## CONFIGURACION SSH EN WINDOWS:
    Usando Git bash seguimos los siguientes pasos:

    1. Creamos una carpeta llamada 'llaves=ssh' en el disco 'C' para evitar problemas de ruta.

    2. Ejecutar el comando "ssh-keygen -t rsa -C "correo electronico@gmail.com".
    El correo debe ser el mismo con el que registramos en GitHub para evitar posibles problemas.
    Dejamos el passhrase vacion y damos enter.
    Cuando nos pida la ruta escribimos '/c/llaves-ssh'github_rsa'.

    3. Iniciamos ssh-agent en background ejecutando el comando 'eval "$(ssh-a).

    4. Agregamos la llave ssh generada a ssh-agent ejecutando el comando 'ssh-add /c/llaves-ssh/github_rsa'.

    5. Usar el comando 'cat /c/llaves-ssh/github_rsa.pub.
    Con este comando vemos el contenido del archivo, copiamos todo el texto que nos muestra.

    6. Ir a las configuracion de nuestro perfil de Github y agregar una nueva llaves SSH con el contenido que hemos copiados de github_rsa.pub.
    
    Desde ahora podes hacer pull si que git hub no esta pidiendo datos de acceso.

    
   
    