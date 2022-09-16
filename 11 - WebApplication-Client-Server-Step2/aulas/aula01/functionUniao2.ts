function printId(id: number | string){
  if(typeof id == 'string'){
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printId(13);
printId("treze");