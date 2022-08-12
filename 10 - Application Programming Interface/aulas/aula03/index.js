const fs = require('fs');
const filename = 'students.json'

fs.readFile(filename, 'utf8', (error, data)=>{
  data = JSON.parse(data);
  console.log(data);
  
  const tricia = data.find(student => student.name === "Tricia Moon");
  tricia.age = 45;

  const jenna = data.find(student => student.name === "Jenna Cannon");
  jenna.is_active = true;

  let gravar = JSON.stringify(data);
  fs.writeFile('students.json', gravar, (error) => {});
})