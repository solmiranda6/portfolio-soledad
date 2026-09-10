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


function mostrar_proyectos(lista){
    lista.forEach((proyecto, index)=> {
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
}

mostrar_proyectos(proyectos);


function crearElemento(tipo, texto){ //tipo vendria a ser la etiqueta que se va a crear. Texto es el contenido de esa etiqueta.
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;

    return elemento;
};

const tecnologias_map = tecnologias.map( (tecnologia)=>{ //map() genera un array nuevo a partir de otro array. No modifica el array original.
    return tecnologia.toUpperCase();
});


// const proyectos_terminados = proyectos.filter( (proyecto) => { //filter() selecciona elementos y crea un array nuevo solo con los que cumplen una condicion
//     return proyecto.estado === "en desarrollo";
// } );

// const proyecto_encontrado = proyectos.find((proyecto)=>{ //find() busca y devuelve el primer elemento que cumple una condicion
//     return proyecto.nombre === "Netflix";
// });

// const hay_terminados = proyectos.some((proyecto)=>{ //some() sirve para ver si hay por lo menos uno que cumpla la condicion y solo devuelve true o false
//     return proyecto.estado === "pausado";

// });

// const todos_terminados = proyectos.every((proyecto) =>{ //every() sirve para ver si todos cumplen la condicion, solo basta con que uno no cumpla y devuelve false
//     return proyecto.estado === "terminado";
// });

// SECTOR DE BOTONES PARA FILTRAR LAS TECNOLOGIAS

const proyectos_en_desarrollo = proyectos.filter( (proyecto) => {
    return proyecto.estado === "en desarrollo";
});

const filtros_proyectos = document.getElementById("filtro-proyectos");
filtros_proyectos.addEventListener("change", () => {
    const estado_seleccionado = filtros_proyectos.value;
    contenedor_proyectos.innerHTML = "";

    if(estado_seleccionado === "todos"){
        mostrar_proyectos(proyectos);
    }else{
        const proyectos_filtrados = proyectos.filter( (proyecto) => {
            return proyecto.estado === estado_seleccionado;
        });

        mostrar_proyectos(proyectos_filtrados);

    };
});
//sort() sirve para ordenar un array.
// const numeros = [10,2,30,5,100];
// numeros.sort((b, a) => { //para ordenar de menor a mayor se ponen parametros y se restan entre si, ej: a- b es para ordenar de menor a mayor. Ej b-a es para ordenar de mayor a menor.
//     return a-b;
// });
// console.log(numeros)

//localeCompare() sirve para comparar dos textos y decidir cuál debería ir primero alfabéticamente.
// const mujer = "soledad";
// const hombre = "facundo";
// const comparacion = hombre.localeCompare(mujer);
// //Con localeCompare() lo importante no es tanto si devuelve exactamente 1 o -1, sino el signo:
// // Negativo → el primer texto va antes.
// // Positivo → el primer texto va después.
// console.log(comparacion)

// const proyectos_ordenados = [...proyectos]; //[...arrayOriginal]: los primeros tres puntos se llama spread operator y sirve para copiar arrays sin modificar el array original
// proyectos_ordenados.sort((a,b)=>{ //sort() y localCompare() permite ordenar textos alfabeticamente.
//     const comparacion = b.nombre.localeCompare(a.nombre);
//     return comparacion; // A CONTA B = ORDEN DE A-Z
//                         // B CONTRA A = ORDEN DE Z-A
// });

// ORDENAR ALFABETICAMENTE CON SORT Y LOCALECOMPARE
const select_ordenProyectos = document.getElementById("orden-proyectos");
const select_filtrosProyectos = document.getElementById("filtro-proyectos");

select_ordenProyectos.addEventListener("change", ()=>{
    const orden_seleccionado = select_ordenProyectos.value;
    const filtro_seleccionado = select_filtrosProyectos.value;
    let lista_proyectos = [...proyectos];
    contenedor_proyectos.innerHTML= "";

    // Primero se filtran los proyectos para que no se rompan cuando se ordene alfabeticamente
    if (filtro_seleccionado != "todos"){//si el filtro no es "todos", que muestre los proyectos que coincidan con el filtro seleccionado
        lista_proyectos = proyectos.filter((proyecto) => {
            return proyecto.estado === filtro_seleccionado
        });
    }


    if(orden_seleccionado === "a-z"){
        const proyectos_ordenados = [...lista_proyectos];
        proyectos_ordenados.sort((a,b)=>{
            const comparacion = a.nombre.localeCompare(b.nombre);
            return comparacion;
        });
        mostrar_proyectos(proyectos_ordenados);
    }else{
        const proyectos_ordenados = [...lista_proyectos];
        proyectos_ordenados.sort((a,b)=>{
            const comparacion = b.nombre.localeCompare(a.nombre);
            return comparacion;
        });
        mostrar_proyectos(proyectos_ordenados);
    }

});
