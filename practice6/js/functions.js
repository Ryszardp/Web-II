/*Archivo externo functions.js*/

function upDate(element) {
    /* En esta función deberías:
 
    1) Cambiar la URL para la "background image" (imagen de fondo) del div con el id = "image"
    por la del archivo de la vista previa de la imagen.

    2) Cambiar el texto del div con el id = "image"
    por el texto alt de la vista previa de la imagen.
    */

    var src = element.getAttribute("src");
    var alt = element.getAttribute("alt");
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('texto').innerHTML = alt;
    document.getElementById('image').innerHTML = "";
}

function unDo() {
    /* Esta función deberías:

    1) Actualizar la url de la "background image" (imagen de fondo) del div con id = "image"
    de vuelta al de la imagen original.  Puedes usar el css para ver cuál era la URL original.

    2) Cambiar el texto del div con id = "image"
    de vuelta al texto original.  Puedes usar el código HTML para ver cuál era el texto original.

    */
    var imagen = document.getElementById('image');
    imagen.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Pase el Mouse Por Encima de una Imagen Para Verla Aqu&iacute;";
    document.getElementById('texto').innerHTML = "";
}
