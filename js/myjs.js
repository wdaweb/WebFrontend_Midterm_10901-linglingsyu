

function todosort(sort){
  let name = $(".card");
  if(sort == "all"){
    sort = "";
  }
  for ( let i = 0; i < name.length; i++){
    name.eq(i).addClass("show");
  }
}