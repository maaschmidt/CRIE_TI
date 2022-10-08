const ENDPOINT = 'http://localhost:3000'

const loadPage = async () => {
  const users = await buscaUsuarios();
  let userHTML = '<option disabled selected>Selecione</option>';
  userHTML += '<option value="all">Todos</option>'
  for (const user of users) {
    userHTML += '<option value="' + user.id + '">' + user.name + '</option>'
  }
  document.getElementById("user").innerHTML = userHTML;
}

const buscaUsuarios = async () => {
  let users = await axios.get(`${ENDPOINT}/users`);
  return users.data;
}

loadPage();

function checkUncheck(caller) {
  var checks = document.querySelectorAll('input[type="checkbox"]');
  checks.forEach(c => c.checked = (c == caller));
}

const listPix = async () => {
  try {
    const userId = document.getElementById('user').value;
    const type = validaCheckbox();
    let url = `/pix/${userId}/${type}`

    if(userId ==='all'){
      url = 'pix'
    } if (type){
      axios.get(`${ENDPOINT}${url}`)
      .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            var trHTML = '';
            trHTML += '<thead>'
            trHTML += '<tr>'
            trHTML += '<th class="desc-column" scope="col">Id</th>'
            trHTML += '<th class="action-column" scope="col">Remetente</th>'
            trHTML += '<th class="action-column" scope="col">Destinatário</th>'
            trHTML += '<th class="action-column" scope="col">Data</th>'
            trHTML += '<th class="action-column" scope="col">Valor</th>'
            trHTML += '</tr>'
            trHTML += '</thead>'
            data.forEach(element => {
              trHTML += '<tr class="table-data">';
              trHTML += '<td>' + element.id + '</td>';
              trHTML += '<td>' + element.sender.name + '</td>';
              trHTML += '<td>' + element.recipient.name + '</td>';
              trHTML += '<td>' + element.createdAt + '</td>';
              trHTML += '<td> R$ ' + element.value + '</td>';
              trHTML += "</tr>";
            });
            document.getElementById("mytable").innerHTML = trHTML;
          }
        })
    }
    }catch(error){

    }
};

const validaCheckbox = () => {
  let checkSelected = false;
  let check = false;
  for (i = 0; i <= 1; i++) {
    if (document.getElementById('type[' + i + ']').checked) {
      check = document.getElementById('type[' + i + ']').value;
      checkSelected = true;
    }
  }
  if (!checkSelected) {
    alert('Selecione pelo menos um tipo!');
  }
  else {
    return (check);
  }
}

