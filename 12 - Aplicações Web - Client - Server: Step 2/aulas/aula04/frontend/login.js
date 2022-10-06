const ENDPOINT = 'http://localhost:3000/'

const getFormData = () => {
  let form = document.querySelector('form');
  let formData = new FormData(form);
  let dados = Object.fromEntries(formData);
  return dados;
}

const auth = async () => {

  let formData = getFormData();
  let authorization = `${formData.username}:${formData.password}`;
  let base64 = btoa(authorization);

  let headers = new Headers({
    authorization: `Basic ${base64}`
  });

  const options = {
    headers: headers,
    method: 'GET',
    cache: 'no-store'
  }

  let url = `${ENDPOINT}auth`
  const response = await fetch(url, options);
  const user = await response.json();

  if (user != null && user.id) {
    localStorage.setItem('logado', JSON.stringify(user));
    window.location.reload();
  } else {
    alert('Falha ao realizar login')
  }
}

const verify = async () => {

  let logado = JSON.parse(localStorage.getItem('logado'))

  if (logado == null) {
    return;
  }

  let authorization = `${logado.email}:${logado.senha}`;
  let base64 = btoa(authorization);

  let headers = new Headers({
    authorization: `Basic ${base64}`
  });

  const options = {
    headers: headers,
    method: 'GET',
    cache: 'no-store'
  }

  let url = `${ENDPOINT}verify`
  const response = await fetch(url, options);
  const user = await response.json();

  if (user) {
    document.body.innerHTML = `Bem Vindo ${logado.nome}`
    document.body.innerHTML += `<br />`
    document.body.innerHTML += `<a href='/login.html' onclick='out()'>Sair</a>`
  }
}
verify();

const out = () => {
  if (confirm('Realmente deseja sair?')) {
    localStorage.removeItem('logado');
  }
}
