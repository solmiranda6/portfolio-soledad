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

const tecnologias = ["html", "css", "javascript", "mysql", "java", "c++"];
        //parametros: 1° elemento, 2° indice del elemento
tecnologias.forEach((tecnologia, index) => { // por cada elemento del array tecnologias, lo llamamos tecnologia y en el console log mostramos esa variable
    console.log(tecnologia + " - " + index);
});