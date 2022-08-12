new Promise((resolve, reject) => {
});

const funcaoUm = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Terminou função 1");
      resolve();
      //reject("Algo deu errado")
    }, 2000);  
  });
}

const funcaoDois = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Terminou função 2")
      resolve();
    }, 1000);
  });
}

const funcaoTres = () => {
  setTimeout(() => {
    console.log("Terminou função 3")
  }, 500);
}

// funcaoUm().then(() => {
//   funcaoDois().then(() => {
//     funcaoTres();
//   }).catch((error) => {
//     console.log(error);
//   })
// }).catch((error) => {
//   console.log(error);
// });
//------------------------
// funcaoUm()
//   .then(() => {
//     return funcaoDois();
//   })
//   .then(() => {
//     funcaoTres();
//   }).catch((error) => {
//     console.log(error);
//   });
//-------------------------
funcaoUm()
  .then(() => {
    return funcaoDois();
  })
  .then(funcaoTres)
  .catch((error) => {
    console.log(error);
  });