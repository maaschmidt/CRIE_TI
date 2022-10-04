const ENDPOINT = 'http://localhost:3000/'

const getFormData = () => {
  let form = document.querySelector('form');
  let formData = new FormData(form);
  let dados = Object.fromEntries(formData);
  return dados;
}

const auth = async () => {

  let formData = getFormData();

  let headers = new Headers({
    username: formData.username,
    password: formData.password
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

  console.log(user);
}

const verify = async () => {

  let logado = JSON.parse(localStorage.getItem('logado'))

  if(logado == null){
    return;
  }

  let headers = new Headers({
    username: logado.email,
    password: logado.senha
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
  if(confirm('Realmente deseja sair?')){
    localStorage.removeItem('logado');
  }
}
