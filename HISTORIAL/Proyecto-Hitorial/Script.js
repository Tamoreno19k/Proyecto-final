function agregarPagina() {
    // Generar una URL única para cada página agregada al historial
    const pagina = "pagina" + Math.random().toString(36).substring(7);

    // Agregar la página al historial sin recargar la página
    history.pushState({ pagina }, "Página " + pagina, "/" + pagina);

    // Actualizar el contenido de la página
    actualizarContenido(pagina);
}

function regresar() {
    // Regresar a la página anterior en el historial del navegador
    history.back();
}

// Esta función se llama cuando se presiona el botón "Agregar Página" para mostrar el contenido de la página actual
function actualizarContenido(pagina) {
    const contenido = document.getElementById("contenido");
    contenido.innerHTML = `<p>Estás viendo la página: ${pagina}</p>`;
}

// Escuchar el evento "popstate" para manejar los cambios en el historial del navegador
window.addEventListener("popstate", function (event) {
    if (event.state) {
        actualizarContenido(event.state.pagina);
    }
});

// Mostrar contenido inicial
actualizarContenido(window.location.pathname.replace("/", ""));