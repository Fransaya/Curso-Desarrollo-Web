# ETIQUETAS DE GIT:

    ETIQUETAS: permite macar puntos especificos en la historia como importantes.

## COMO SE CREA UNA ETIQUETA:

    git tag <nombre de la etiqueta>

     Existen dos tipos de etiquetas:

        ## ETIQUETA LIGERA: es un apuntador a un commit.
            Forma: git tag <version>.

        ## ETIQUETA ANOTADA: guardan en la base de datos de git, objetos enteros. (el commit de un punto de la historia.) 
            Forma: git tag -a <nombre de la etiqueta> -m <mensaje de la etiqueta>.

### COMANDOS PARA ETIQUETAS:

    @ git tag: permite listar las etiquestas que ya existen en orden alfabetico.

        - git tag -l "v1.*" : lista de las etiquetas que coinciden con el patron especificado.

    @ git show: permite ver los cambios que se realizaron en un commit especifico.

    @ git checkout <nombre de etiqueta o hash> : permite movernos a esta etiqueta determinada, es decir pararnos en la misma, y poder ver y analizar sus cambios.
    


    



