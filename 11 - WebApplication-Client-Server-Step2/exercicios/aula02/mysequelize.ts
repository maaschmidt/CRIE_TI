import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize";
import { User } from "./UserModel";

async function main(){
  await User.sync({force:true})

  let marcel : User = new User();
  marcel.firstName = "Marcel";
  marcel.lastName = "Schmidt";
  marcel.birthday = "13/03/1997";
  await marcel.save();

  let ariele : User = new User();
  ariele.firstName = "Ariele";
  ariele.lastName = "Marques";
  ariele.birthday = "13/12/1997"
  await ariele.save()

  let user = await User.findAll();

  console.log(JSON.stringify(user,null,2));
}

main();