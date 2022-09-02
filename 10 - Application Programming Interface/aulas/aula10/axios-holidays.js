require("dotenv").config();
const axios = require("axios");

// axios.defaults.baseURL = process.env.API_URL;
axios.defaults.baseURL = process.env.FERIADOS_URL;

axios.get('2022').then((response) =>{
  console.log(response.data);
})