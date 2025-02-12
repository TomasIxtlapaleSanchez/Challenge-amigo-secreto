let nombreAmigo = "";
let listaAmigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
    return;
}

function agregarAmigo(){
    limpiar();
    let inputNombre = document.getElementById("amigo");
    nombreAmigo = inputNombre.value;
    if(nombreAmigo === ""){
        alert("Por favor, ingresa un nombre");
        return;
    }else {
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        mostrarLista();
        inputNombre.value = "";
        return;
    }
}
function mostrarLista() {
    const listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = ""; // Limpiar la lista actual

    // Recorrer la lista ordenada y agregar cada elemento al DOM
    listaAmigos.forEach((nombre) => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        listaNombres.appendChild(nuevoElemento);
    });
}

function sortearAmigo(){
    if (listaAmigos.length > 0) {
        let amigoSorteado = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        asignarTextoElemento("#resultado", "El amigo sorteado es: " +amigoSorteado);
        console.log(amigoSorteado);
        document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista actual
        amigoSorteado = "";
        listaAmigos = [];
        return;
    } else {
        alert("La lista está vacía, por favor ingrese nombres.");
        limpiar();
    }
}
function limpiar() {
    asignarTextoElemento("#resultado", "");
}