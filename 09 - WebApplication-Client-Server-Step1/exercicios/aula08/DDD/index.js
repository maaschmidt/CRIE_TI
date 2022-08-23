APIdata = async () => {    
  const ddd = await document.getElementById("ddd").value;
  const urlAPI = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
   
  const response = await fetch(urlAPI);
  const result = await response.json(response);
    
  var table = document.querySelector(".table");
  table.innerHTML = '';

  if(response.status == 404){
      alert(`${ddd} é um DDD inválido`)
  } else {
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr></tr><th>Cidade</th><th>Estado</th></tr>`;
    table.appendChild(tr);

    result.cities.forEach(element => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr>${`<td>${element}</td><td>${result.state}</td>`}</tr>`;
    table.appendChild(tr);
    });
  }
}