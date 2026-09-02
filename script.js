const btn_sm = document.getElementById("logo-inicio");
const sobremi_txt = document.getElementById("sobre-mi");

btn_sm.addEventListener("click", cambiar_texto)

function cambiar_texto(){
    sobremi_txt.textContent = "ACERCA DE MI PERSONA";
    return;
};

const btn_theme = document.getElementById("btn-theme");

btn_theme.addEventListener("click", cambiar_modo);

function cambiar_modo(){
    const icono_theme = document.getElementById("icono-theme");
    document.body.classList.toggle("modo-claro"); // toggle es como un boton que añade o quita 

    if(document.body.classList.contains("modo-claro")){
        icono_theme.classList.remove("bi-sun");
        icono_theme.classList.add("bi-moon");
    }else{
        icono_theme.classList.remove("bi-moon");
        icono_theme.classList.add("bi-sun");
    }

    return;
}

const tecnologias = ["html", "css", "javascript", "mysql", "java", "c++"]; //array: guarda una lista de cosas
const contenedor_tecnologias = document.querySelector(".tecnologias-lista");

//parametros: 1° elemento, 2° indice del elemento
tecnologias.forEach((tecnologia, index) => { // por cada elemento del array tecnologias, lo llamamos tecnologia y en el console log mostramos esa variable
    const span = document.createElement("span");
    span.textContent = tecnologia;

    contenedor_tecnologias.appendChild(span);
});

const proyecto = { //objeto: describe una cosa es una variable. Ej: nombre: Javscript, descripcion: tecnologia muy usada, nivel: intermedio, etc.
    nombre: "Muma cosmetics",
    descripcion: "tienda online de cosméticos hechos con IA.",
    tecnologias: ["HTML", "CSS", "Javascript"]
}; 

const proyecto2 = {
    nombre: "Turnero",
    descripcion: "turnero para la gestion de turnos de una veterinaria",
    tecnologias: ["PHP", "CSS", "Javascript"]
}; 

const proyectos = [proyecto, proyecto2];
const contenedor_proyectos = document.querySelector(".lista-proyectos");

proyectos.forEach((proyecto, index)=> {
    const tarjeta = document.createElement("div");
    const titulo = document.createElement("h3");
    const descripcion = document.createElement("p");
    const cont_tec_proyectos = document.createElement("div");

    tarjeta.classList.add("proyecto");
    titulo.textContent = proyecto.nombre;
    descripcion.textContent = proyecto.descripcion;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    contenedor_proyectos.appendChild(tarjeta);

    proyecto.tecnologias.forEach((tecnologia => {
        const span = document.createElement("span");

        span.textContent = tecnologia;

        cont_tec_proyectos.appendChild(span);
        cont_tec_proyectos.classList.add("tecnologias-proyecto");
        tarjeta.appendChild(cont_tec_proyectos);
    }))


});
