const funcaoUm = (callback) => {
  setTimeout(() => {
    console.log("Terminou função 1")
    callback();
  }, 2000);
}

const funcaoDois = () => {
  setTimeout(() => {
    console.log("Terminou função 2")
  }, 1000);
}

funcaoUm(funcaoDois);