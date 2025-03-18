let totalAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (totalAmigos.includes(amigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    totalAmigos.push(amigo);
    console.log(totalAmigos);
    document.getElementById('amigo').value = "";
    document.getElementById('listaAmigos').innerText = `Amigos: \n${totalAmigos.join("\n")}`;
}

function sortearAmigo() {
    if (totalAmigos.length < 2) {
        document.getElementById("listaAmigos").innerText = "Debe haber al menos dos amigos en la lista para hacer un sorteo.";
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * totalAmigos.length);
    let nombreSorteado = totalAmigos[numeroSorteado];

    document.getElementById("listaAmigos").innerText = `Tu amigo secreto es: ${nombreSorteado}`;

    totalAmigos.splice(numeroSorteado, 1); // Elimina el amigo sorteado
}
