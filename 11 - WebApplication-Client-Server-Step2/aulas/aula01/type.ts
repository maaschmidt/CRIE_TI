type ID = number | string;

function IdPrint(id: ID){
  if(typeof(id) == "string"){
    console.log(id.toUpperCase);
  } else {
    console.log(id);
  }
}

IdPrint(13);
IdPrint("treze");