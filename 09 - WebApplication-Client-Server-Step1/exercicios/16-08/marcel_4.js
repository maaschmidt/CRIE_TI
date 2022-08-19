const https = require('https');
const fs = require("fs");

const httpsGet = () => {
  return new Promise((resolve, reject) => {
	https.get('https://picsum.photos/v2/list', (response) => {
  	let dados = '';
  	response.on('data', (buffer) => {
    	dados += buffer;
  	});
  	response.on('end', () => {
    	resolve(dados);
  	})
	}).on('error', (error) => {
  	reject(error);
	});
  });
}

httpsGet()
  .then((dados) => {
    escreveArquivo(dados);
  })
  .catch((error) => {
    console.log(error);
  });

function escreveArquivo(dados) {
  fs.writeFile('novofile.json', dados, function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Arquivo gravado com sucesso!");
    }
  });
}

