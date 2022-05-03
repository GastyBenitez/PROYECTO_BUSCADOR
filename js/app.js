//VARIABLES
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//EVENTOS
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos()
    llenarSelect()
});

//FUNCIONES
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, puertas, year, precio, color, transmision} = auto

        const autoHTML = document.createElement("p")
        autoHTML.textContent =  `Auto: ${marca} - Modelo: ${modelo} - Puertas: ${puertas} - Año: ${year} - Precio: ${precio} - Color: ${precio} - Color: ${color} - Transmision: ${transmision}`

        resultado.appendChild(autoHTML)
    });
}


function llenarSelect(){
    for(let i =maxYear; i>minYear; i --){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);


    }
}