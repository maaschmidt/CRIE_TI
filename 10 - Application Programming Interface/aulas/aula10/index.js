require("dotenv").config();
const axios = require("axios");

axios.defaults.baseURL = process.env.API_URL;

axios.get('users').then((response) =>{
  console.log(response.data);
})

axios.post('users', {
  name: "John Doe",
  email: "jhondoe@gmail.com",
  age: 15,
  sex: "male"
}).catch((error) => {
  console.log(error.response.data);
});

axios.put('users/7', {
  name: "John Doe",
  email: "johndoe@gmail.com",
  age: 15,
  sex: "male"
}).then((response) => {
  console.log(response.data);
})

axios.delete('users/7').then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error.response.data);
})  