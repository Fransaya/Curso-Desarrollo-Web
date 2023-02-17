# CSS
 Permite manejar el estilo y presentacion de la pagina web, es decir darle color, estilo, tamano, ancho, alto, bordes, rtc.

 ## REGLA CSS:
    Una regla css esta compuesta por un atributo o propiedad y un valor. dependiendo del atributo que utilizemos y el valor que se le asigne al mismo, vamos a obtener uno u otro resultado visual del mismo.


# FORMAS DE DAR ESTILO:
   Existen varias formas de comunicarle al browser que vamos a darle reglas de estilo.
 
 ### Atributo style:
  se le da la regla de estilo a cada tag html.
 - Ejemplo:
 <p style='color:red'> Esto es un parrafo, al que se le agrego color red</p>

 ### Usando <style> en el <Head>
  se utiliza en el documento html, con esto se agrupan todas las reglas que se van a aplicar a uno o mas elementos html. permite dar estilos a muchos elementos a la misma vez, pero solo a elementos del mismo documento.
 - Ejemplo:
   <html>
      <head>
       <style>
         // aca va las reglas.
       </styl>
      </head>
   </html>


 ### Usando el tag <link>:
   se definen reglas css en un documento separado e importado a nuestra pagina.esto permite importar el mismo css a varias paginas html.
 - Ejemplo:
 <html>
   <head>
      <link rel='stylesheet' href='style.css'>// aqui se linkea con el documento css.
   </head>
 </head>

# SELECTORES: 
   sirven para saber a que elemento html debemos aplicarle la reglas css.

   ## identificadores de selectores:
    
   - id: el nombre que se le asigne a la clase solo puede aparecer una sola vez en el documento y selecciona un elemento en particular.
    - Ejemplo:
    <div id='id-div'></div>
   
   - class: permite asignar el nombre de una clase a un grupo de elementos html.
    - Ejemplo:
    <div class='clasesdiv'></div>

   ## SELECTORES BASICOS:
   - DE TIPO     | div {....} // 
   - DE CLASE    | .elemento{.....} // 
   - DE ID       | #id-del-elemento
   - DE ATRIBUTO | a[href=""] {.....}
   - UNIVERSAL   | * {......}
    
# ANATONMIAS DE RECLAS DE ESTILO:

 ## BOX MODEL:
   En html cada elemento esta representado como una caja rectangular y en css esta tiene 4 capas que se pueden manipular:

   1. MAGIN: espacio entre cajas (espacio que separa al eleemnto de los otros elementos.)
   2. BORDER: borde de la caja (se puede hacer visible o aplicarle colores y estilos)
   3. PADDING: espacio entre el borde de la caja (border) y su contenido.
   4. CONTENT: contenido de la caja (tags, h1,p).
      - HEIGHT: alto que queremos que tenga el contenido.
      - WIDTH: ancho que queremos que tenga el contenido.

# INTRODUCCION AL POSICIONAMIENTO:
 ## Propieda Display: 
      especifica como va a ser tratado el elemento, como <block> or <inline element> y el diseño usado por sus hijos.
   ### Valores <display-outside>

      display: block;
      display: inline;
      display: run-in;

   ### Valores <display-inside> 
      display: flow;
      display: flow-root;
      display: table;
      display: flex;
      display: grid;
      display: ruby;
      display: subgrid;

   ### Valores <display-outside> más valores <display-inside> 
      display: block flow;
      display: inline table;
      display: flex run-in;

   ### Valores <display-listitem> 
      display: list-item;
      display: list-item block;
      display: list-item inline;
      display: list-item flow;
      display: list-item flow-root;
      display: list-item block flow;
      display: list-item block flow-root;
      display: flow list-item block;

   ### Valores <display-internal> 
      display: table-row-group;
      display: table-header-group;
      display: table-footer-group;
      display: table-row;
      display: table-cell;
      display: table-column-group;
      display: table-column;
      display: table-caption;
      display: ruby-base;
      display: ruby-text;
      display: ruby-base-container;
      display: ruby-text-container;

   ### Valores <display-box> 
      display: contents;
      display: none;

   ### Valores <display-legacy> 
      display: inline-block;
      display: inline-table;
      display: inline-flex;
      display: inline-grid;

   ### Valores globales 
      display: heredar;
      display: initial;
      display: unset;

 ## Block:
   ocupa el ancho maximo del contenedor en el que se encuentra y hace que se cree una nueva linea.

 ## Inline:
   ocupa el espacio suficiente, es decir lo que ocupa el contenido. (no comienza una nueva linea.)

 ## None:
   el elemento desparace completamente, borrando el espacio y el lugar que ocupaba.

 ## Flex:
   permite controlar en que parte de la pagina queremos que esten nuestros items.

 ## Grid: 
   permite crear sistemas de grillas dentro de un elemento.

# PROPIEDAD POSITION:
   // especifica el tipo de posicionamiento
   - SINTAXIS:
      div {
         position: <valor de la propieda>;
      };
   ## STATIC:
      posicionamiento por defecto (no se puede mover)

   ## RELARIVE:
      el elemento queda estatico pero permite usar metodos de posicionamiento.

   ## FIXED:
      elemento fijo en la pantalla (utilizado para header o barra de navegacion).

   ## ABSOLUTE:
      se posiciona en base a su contenedor padre, es decir el elemento que lo contiene a el.

# INTRODUCCION AL POSICIONAMIENTO:

 ## Display : flex e inline-flex: 
      el elemento es "flex-box' o 'inline-flex'

 ## justify-content:
   aplica el movimiento de izquierda a derecha, en forma de fila.
   - flex-start
   - flex-end
   - center
   - space-between
   - space-around
   - space-envenly  

 ## aling-item:
   aplica el movimiento de arriba abajo, en forma de columna.
   - flex-start
   - flex-end
   - center
   - baseline
   - stretch

 ## flex-direction: 
   - row
   - row-reverse
   - column
   - column-reverse