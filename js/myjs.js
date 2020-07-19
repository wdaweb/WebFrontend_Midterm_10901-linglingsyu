
todosort("all");
function todosort(sort) {
  let name = $(".card");
  for (let i = 0; i < name.length; i++) {
    name.eq(i).removeClass("show");
    if (name.eq(i).hasClass(sort)) {
      name.eq(i).addClass("show");
    }
  }
}





