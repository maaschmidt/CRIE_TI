const ENDPOINT = 'http://localhost:3000'

const loadPage = async () => {
  const users = await buscaUsuarios();
  let userHTML = '<option disabled selected>Selecione</option>';
  for (const user of users) {
    userHTML += '<option value="' + user.id + '">' + user.name + '</option>'
  }
  document.getElementById("sender").innerHTML = userHTML;
  document.getElementById("recipient").innerHTML = userHTML;
}

const buscaUsuarios = async () => {
  let users = await axios.get(`${ENDPOINT}/users`);
  return users.data;
}

// loadPage();

const confirmaTransferencia = () => {
  const sender = document.getElementById("sender").value;
  const recipient = document.getElementById("recipient").value;
  const value = document.getElementById("value").value;

  axios.post(`${ENDPOINT}/pix`, {
    senderId: Number.parseInt(sender),
    recipientId: Number.parseInt(recipient),
    value: Number.parseFloat(value),
  })
    .then((response) => {
      if(response.data.status === 200){
        alert('Transação realizada com sucesso!')
      } else {
        alert('Erro ao realizar transação!')
      }
    }, (error) => {
      alert(`Erro: ${error.response.data.error} `)
    });
}