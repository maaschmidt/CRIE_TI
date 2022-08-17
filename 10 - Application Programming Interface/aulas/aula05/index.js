const funcaoComRetorno = () => {
  return "Olá da função!"
}
const promiseComRetorno = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ola da promisse")
    }, 100);
  })
}

const return1 = funcaoComRetorno();
const return2 = promiseComRetorno();

return2.then((data) => {
  console.log({
    return1, return2
  });
});