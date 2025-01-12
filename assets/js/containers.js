async function loadContent() {
    try {
        // Cargar la página exp.html
        const responseExperiencia = await fetch("exp.html");
        const experienciaHtml = await responseExperiencia.text();
        const parser = new DOMParser();
        const experienciaDoc = parser.parseFromString(experienciaHtml, "text/html");

        // Seleccionar los primeros dos <article> de exp.html
        const articles = experienciaDoc.querySelectorAll("article");
        let content = "";
        for (let i = 0; i < Math.min(2, articles.length); i++) {
                                content += articles[i].outerHTML;
        }

        // Insertar los primeros dos <article> en el contenedor
        document.getElementById("contenedor-experiencia").innerHTML = content;
    } catch (error) {
        console.error("Error al cargar el contenido:", error);
    }

}

// Ejecutar el script al cargar la página principal
window.onload = loadContent;