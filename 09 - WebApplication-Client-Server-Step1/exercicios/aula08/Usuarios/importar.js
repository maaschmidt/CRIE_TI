const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const User = require("./user.js");
const usuarios = require("./usuarios.js")
console.log(usuarios);

(async () => {
  await User.sync({force:true});

  usuarios.forEach(async usuario => {
    const user = await User.create(usuario);
  });
})();