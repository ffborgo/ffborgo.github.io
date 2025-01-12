async function loadContent() {
    try {
        const responseExperiencia = await fetch("exp.html");
        const experienciaHtml = await responseExperiencia.text();
        const parser = new DOMParser();
        const experienciaDoc = parser.parseFromString(experienciaHtml, "text/html");

        const articles = experienciaDoc.querySelectorAll("article");
        let content = "";
        for (let i = 0; i < Math.min(2, articles.length); i++) {
            content += articles[i].outerHTML;
        }

        document.getElementById("contenedor-experiencia").innerHTML = content;
    } catch (error) {
        console.error("Error al cargar el contenido:", error);
    }
}

window.onload = loadContent;
