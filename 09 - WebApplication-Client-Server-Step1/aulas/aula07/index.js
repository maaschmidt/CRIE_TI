APIdata = async () => {    
    const year = await document.getElementById("years").value;
    const urlAPI = `https://brasilapi.com.br/api/feriados/v1/${year}`;

    const response = await fetch(urlAPI);
    const result = await response.json(response);
    console.log(result);
    
    var table = document.querySelector(".table");
    table.innerHTML = '';
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr><th>Data</th><th>Nome</th><th>Tipo</th></tr>`;
    table.appendChild(tr);

    result.forEach(element => {
    let tr = document.createElement("tr");
    element.date = element.date.split('-').reverse().join('/'),
    tr.innerHTML = `<tr>${`<td>${element.date}</td><td>${element.name}</td><td>${element.type}</td>`}</tr>`;
    table.appendChild(tr);
});
}