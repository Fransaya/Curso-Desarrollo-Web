# RAMAS O BRANCH
    una rama en git es un apuntador movil apuntando a una de las confirmaciones o commits.

    --> git branch <nombre de la rama>: me permite crear una nueva rama.

    -- si quiero hacer un salto entre ramas tambien se utiliza el checkout: 
        Forma: git checkout <nombre de la rama>.

    (Puedo crear toda las ramas que quiera y/o necesite.)

    Las nuevas ramas que se creean apuntan al commit actual, donde se ubica el HEAD, donde estamos ubicados.

### Eliminar ramas:
    
    > git brach -d (nombre de la rama): elimina la rama solamente si ya ha sido fusionada con la rama actual.

    > git branch -D (nombre de la rama): elimina la rama este o no fusionada con la rama actual.
        Se fuerza el borrado, se pierden los cambios.

### Creacion de nueva rama:

    git checkout -b (nombre de la rama): esto nos permite crear una nueva rama y saltar a ella de forma inmediata.