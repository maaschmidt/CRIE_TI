const ENDPOINT = 'http://localhost:3000/'
const options = {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store'
}

async function auth() {
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value;
    // let params = `username=${username}+password=${password}`;

    let form = document.querySelector('form');//para "post" apenas isso é necessário
    let params = new URLSearchParams(new FormData(form)).toString();//para get é necessario

    let url = `${ENDPOINT}auth?${params}`    

    const res = await fetch(url, options);
    const result = await res.json()

    console.log(result);
}

async function verify(){
    let url = `${ENDPOINT}verify`;
    const res = await fetch(url, options);
    const result = await res.json();

    console.log(result);

    if(result.loggedIn != "undefined"){
        document.body.innerHTML = `Bem Vindo ${result.userName}`
        
    }
}

verify();