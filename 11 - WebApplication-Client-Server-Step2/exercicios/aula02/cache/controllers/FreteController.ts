import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";
import { Frete } from "../models/FreteModel";

export async function index(){
  await Frete.sync({alter:true})
  return JSON.stringify(await Frete.findAll());
}

export async function create(){
  await Frete.sync({force:true})

  let marcel : Frete = new Frete();
  // marcel.firstName = "Marcel";
  // marcel.lastName = "Schmidt";
  // marcel.birthday = "13/03/1997";
  await marcel.save();

  let ariele : Frete = new Frete();
  // ariele.firstName = "Ariele";
  // ariele.lastName = "Marques";
  // ariele.birthday = "13/12/1997"
  await ariele.save()

  // let Frete = await Frete.findAll();

  console.log(JSON.stringify(Frete,null,2));
}