## COMANDOS DE GIT IMPORTANTES

-- git status: muestra el archivo que fue modificado

-- git add . o (nombre del archivo): sube todos los cambios al area de preparacion y guarda los cambios.

-- git commit (general): permite comentar los cambios asi tener un registro escrito de los mismos

    -- git commit -m: explicacion de los cambios realizados.

    -- git commit(usandolo sin el -m): abre el editor seleccionado y nos permite hacer un commit mas extenso de la modificacion.

    -- git commit -a -m: con este comando se salta el area de preparacion (sirve para los archivos que estamos rastreando)

    -- git commit -amend: permite agregar cambios a un commit ya realizado.

    

-- git push: sube todos los cambios a el repositorio de git, guardando los cambios de forma definitiva.

-- git reset HEAD <nombre archivo>: nos permite sacar el archuivo del area de preparacion

-- git ignore: (.gitignore) se utiliza cuando queremos que git ignore el archivo, es decir que no lo suba.

-- git diff: compara lo que tenemos en el area de trabajo con lo que esta en el area de preparacion.

-- git rm: elimina archivos rastreados del repositorio y del nuestro directorio de trabajo, para que no aparezcan la proxima vez como archivos no rastreados.

-- git chekout (nombre del archivo): permite recuperar un archivo que fue eliminado.

-- git mv (nombre inicial nombre nuevo): renombra archivos.

-- git log: nos permite ver un historia de todos los commits realizados

    -- git log --oneline

    -- git log --graph

    -- git log --pretty=format:"%h - %an, %ar : %s": muestra el historial con el formato que se indica.

    -- git log -n: remplazanaod la n por cualquier numero, ejemplo: git log -2, muestra los dos commits mas recientes

    -- git log --after "fecha y hora en la que quiero ver los commits": muestra los commits realizos despues de la fecha especificada

    --git log --before "fecha y hora en la que quiero ver los commits": muestra los commits realizados despues de la fehcas especificada

    -- git log --decorate --oneline --all --graph: este comando nos muestra el historial en una sola linea por commit.



Esta linea fue creada en la rama main.
    