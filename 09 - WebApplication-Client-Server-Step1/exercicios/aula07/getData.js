APIdata = async () => {
    const urlAPI = `http://177.44.248.52:3000/musicas`;

    const response = await fetch(urlAPI);
    const result = await response.json(response);
    console.log(result);
    
    var table = document.querySelector(".table");
    table.innerHTML = '';
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr><th>ID</th><th>Nome</th><th>Artista</th><th>Album</th><th>Gênero</th></tr>`;
    table.appendChild(tr);

    result.forEach(element => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr>${`<td>${element.id}</td><td>${element.nome}</td><td>${element.artista}</td><td>${element.album}</td><td>${element.genero}</td>`}</tr>`;
    table.appendChild(tr);
});
}