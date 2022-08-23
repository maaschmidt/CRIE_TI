const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const User = require("./user.js");

(async () => {
  const pedro = await User.create({
    firstName: "Pedro", 
    lastName: "dos Santos",
    
  });
  console.log(pedro.toJSON());
})();