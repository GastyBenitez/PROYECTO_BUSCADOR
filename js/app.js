//VARIABLES
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//EVENTOS
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos(autos)
    llenarSelect()
});

//OBJETO DE BUSQUEDA
const datosBusqueda =
{
    marca: '',
    modelo: '',
    year: "",
    minimo: 0,
    maximo: 0,
    puertas: "",
    color: '',
    transmision: ''
}

//FUNCIONES
function mostrarAutos(autos) {
    limpiarHTML()
    autos.forEach(auto => {
        const {marca, modelo, puertas, year, precio, color, transmision} = auto

        const autoHTML = document.createElement("p")
        autoHTML.textContent =  `Auto: ${marca} - Modelo: ${modelo} - Puertas: ${puertas} - Año: ${year} - Precio: ${precio} - Color: ${precio} - Color: ${color} - Transmision: ${transmision}`

        resultado.appendChild(autoHTML)
    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function llenarSelect(){
    for(let i =maxYear; i>minYear; i --){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);


    }
}

function filtrarAuto() {
    
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarMinimo).filter(filtrarMaximo)
    if(resultado.length){
        console.log(resultado);
        mostrarAutos(resultado);
    }else {
        limpiarHTML()
        noTieneAuto()
        
    }
    
    
        
    
    
    
}

function noTieneAuto(){
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No existen autos para la busqueda realizada";
    resultado.appendChild(noResultado);
    
    
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear (auto) {
    
    if(datosBusqueda.year){
        return auto.year === parseInt (datosBusqueda.year)
    }
    return auto
}



function filtrarPuertas (auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === parseInt (datosBusqueda.puertas)
        
    }
    return auto
}

function filtrarTransmision (auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto
}

function filtrarColor (auto) {
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda

    if(minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda

    if(maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto
}





//LISTENER 

marca.addEventListener("change",(e)=>{
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value
    filtrarAuto()
});

year.addEventListener("change", (e) =>{
    datosBusqueda.year = e.target.value
    filtrarAuto()
});

puertas.addEventListener("change", (e) =>{
    datosBusqueda.puertas = e.target.value
    filtrarAuto()
});

transmision.addEventListener("change", (e)=>{
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
});

color.addEventListener("change", (e)=>{
    datosBusqueda.color = e.target.value
    filtrarAuto()
});

minimo.addEventListener("change", (e) =>{
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
});

maximo.addEventListener("change", (e) =>{
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
});


