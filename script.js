// Configuracion de modo oscuro y claro

const btn_theme = document.getElementById("btn-theme");

btn_theme.addEventListener("click", cambiar_modo);
const tema_guardado = localStorage.getItem("tema"); //localStorage guarda datos en el navegador como pares de clave → valor
if(tema_guardado === "oscuro"){
        document.body.classList.remove("modo-claro");
    }


function cambiar_modo(){
    const icono_theme = document.getElementById("icono-theme");
    document.body.classList.toggle("modo-claro"); // toggle es como un boton que añade o quita 


    if(document.body.classList.contains("modo-claro")){
        icono_theme.classList.remove("bi-sun");
        icono_theme.classList.add("bi-moon");
        localStorage.setItem("tema", "claro"); //localStorage.setItem("tema", "color")
    }else{
        icono_theme.classList.remove("bi-moon");
        icono_theme.classList.add("bi-sun");
        localStorage.setItem("tema", "oscuro");
    }

    return;
}

// Insertar tecnologias en las tarjetas

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
    tecnologias: ["HTML", "CSS", "Javascript"],
    github: "#",
    estado: "terminado"
}; 

const proyecto2 = {
    nombre: "Turnero",
    descripcion: "turnero para la gestion de turnos de una veterinaria",
    tecnologias: ["PHP", "CSS", "Javascript"],
    github: "",
    estado: "en desarrollo"
}; 

const proyecto3 = {
    nombre: "StockIA",
    descripcion: "app de control de stock para cualquier tipo de empresa con Inteligencia Artificial",
    tecnologias: ["Java","Spring Boot","C++"],
    github: "",
    estado: "en desarrollo"
};

const proyectos = [proyecto, proyecto2, proyecto3];
const contenedor_proyectos = document.querySelector(".lista-proyectos");

proyectos.forEach((proyecto, index)=> {
    const tarjeta = document.createElement("div");
    const titulo = crearElemento("h3", proyecto.nombre);
    const descripcion = crearElemento("p", proyecto.descripcion);
    const cont_tec_proyectos = document.createElement("div");
    const enlace = document.createElement("a");
    const estado = crearElemento("span", proyecto.estado);



    tarjeta.classList.add("proyecto");

    enlace.textContent = "Ver proyecto";
    enlace.href = proyecto.github;

    estado.classList.add("estado-proyecto");

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);

    contenedor_proyectos.appendChild(tarjeta);
    

    proyecto.tecnologias.forEach((tecnologia => {
        const span = crearElemento("span", tecnologia);

        cont_tec_proyectos.appendChild(span);
        
    }))

    cont_tec_proyectos.classList.add("tecnologias-proyecto");
    tarjeta.appendChild(cont_tec_proyectos);
    tarjeta.appendChild(estado);

    if(proyecto.estado === "terminado"){
        tarjeta.appendChild(enlace);
    }else if (proyecto.estado === "en desarrollo"){
        const span = crearElemento("span", "Proximamente :)");
        tarjeta.appendChild(span)
    }else{
        const span = crearElemento("span", "Pausado");
        tarjeta.appendChild(span)
    }

    
});

function crearElemento(tipo, texto){ //tipo vendria a ser la etiqueta que se va a crear. Texto es el contenido de esa etiqueta.
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;

    return elemento;
};

const tecnologias_map = tecnologias.map( (tecnologia)=>{ //map() genera un array nuevo a partir de otro array. No modifica el array original.
    return tecnologia.toUpperCase();
});


const proyectos_terminados = proyectos.filter( (proyecto) => { //filter() selecciona elementos y crea un array nuevo solo con los que cumplen una condicion
    return proyecto.estado === "en desarrollo";
} );
console.log(proyectos_terminados)


