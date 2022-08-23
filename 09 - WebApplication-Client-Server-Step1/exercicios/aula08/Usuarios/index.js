const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const User = require("./user.js");

(async () => {
  User.alerta();
  
  await User.sync({force: true});
  // await User.drop();
  
  const user = User.build({
      firstName: "Juca",
      lastName: "Bala"
  });
  
  console.log(user.toJSON());
  console.log(`FullName: ${user.getFullName()}`)
  console.log(`Is ${user.firstName} a user = ${(user instanceof User)}`); //true
  
  await user.save();
  
  user.firstName = "Marcel";
  user.lastName = "Schmidt";
  
  await user.save();
  
  // await user.update({firstName:"Juquinha"});
  
  // user.destroy();
})();