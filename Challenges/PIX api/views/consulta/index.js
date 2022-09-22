const ENDPOINT = 'http://177.44.248.30/v1'

function checkUncheck(caller) {
  var checks = document.querySelectorAll('input[type="checkbox"]');    
  checks.forEach(c => c.checked = (c == caller) );
}

const listPix = async () => {
  const userId = document.getElementById('user_id').value;
  const type = await validaCheckbox();
  
  axios.get(`${ENDPOINT}/pix/${userId}/${type}`)
      .then((response) => {
          if (response.status === 200) {
              const data = response.data;
              var trHTML = '';
              data.forEach(element => {
                  trHTML += '<tr class="table-data">';
                  trHTML += '<td>' + element.id + '</td>';
                  trHTML += '<td>' + element.sender.name + '</td>';
                  trHTML += '<td>' + element.recipient.name + '</td>';
                  trHTML += '<td>' + element.createdAt + '</td>';
                  trHTML += '<td> R$' + element.value + '</td>';
                  trHTML += "</tr>";
              });
              document.getElementById("mytable").innerHTML = trHTML;
          }
      })
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