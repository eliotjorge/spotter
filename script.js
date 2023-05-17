let pages = new Array('one', 'two', 'three', 'four');
let elements = document.getElementsByClassName("body-map__muscle");
function toggleMenu() {
 document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
}

function goToPage(page) {
  let wrapper = document.getElementsByClassName('wrapper')[0];
  let sections = document.getElementsByTagName('section');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before','after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  wrapper.classList.remove('menu-open','page-one','page-two');
  wrapper.classList.add('page-' + pages[page]);
}





document.addEventListener("DOMContentLoaded", function () {
  /*PESOS */

  const arr = Array.from(elements);

  let muestraPeso = function () {
    let attribute = this.getAttribute("id");
    alert("Abierto "+ attribute);
  };

  arr.forEach((el) => {
    el.addEventListener("click", muestraPeso, false);
  });

  cerrarPesos();
  /*cerrarPesos.addEventListener("click", function () {
    if (ventanaPesos.style.display == "block")
      ventanaPesos.style.display = "none";
  });
*/
});

function cerrarPesos() {
  if (ventanaPesos.style.display == "block")
    ventanaPesos.style.display = "none";
}

// Check items when complete

$(document).on("click", ".check", function() {

  $(this).toggleClass("selected");

});

// When enter key is pressed append a new item to the list

  $(document).on("click", "#anadir", function() {
    
    $(".list").append("<li>" +$(".toDo").val() + "<span class='check'>" + "</span>" + "<img class='remove' width='20' src='https://cdn-icons-png.flaticon.com/512/8689/8689959.png'/>" + "</li>");

    $(".toDo").val('');
  
});

// Delete items off list

$(document).on("click", ".remove", function() {

  $(this).parent().remove();

});