// Arreglo para almacenar los nombres de amigos de Alejandra 
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === "") {
        alert("Por favor, digita un nombre.");
        return;
    }

    // Validamos sie el amigo ya esta en la lista para evitar duplicidad
    if (amigos.includes(nombre)) {
        alert("El nombre de tu amigo ya está en la lista.");
        return;
    }

    // Se agrega un amigo al arreglo
    amigos.push(nombre);

    // Se actualiza la lista de Amigos
    actualizarListaAmigos();

    // Se limpia el campo de entrada 
    input.value = "";
}

// Funcion que actualiza la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    // Crear un fragmento para mejorar el rendimiento al modificar el DOM, este cambio me lo sugirio un amigo de discord
    let fragmento = document.createDocumentFragment();

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        fragmento.appendChild(li);
    });

    lista.appendChild(fragmento);
}

// Función con la que sorteamos el amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validacion para que halla por lo menos un amigo en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>!! Upsss los siento !!! No tienes amigos en la lista para sortear.</li>";
        return;
    }

    // Se genera el índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado del sorteo
    resultado.innerHTML = `<li>!!! Felicitaciones tu amigo sorteado es !!!: <strong>${amigoSorteado}</strong></li>`;
}
