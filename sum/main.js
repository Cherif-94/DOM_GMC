// importer le boutton (+)
let btn = document.querySelectorAll(".btn_plus");
// importer la quantitè
let quantity = document.querySelectorAll(".qte");
// importer le boutton (-)
let btn2 = document.querySelectorAll(".btn_moin");
// importer le prix
let prix = document.querySelectorAll(".prix");
//  importer le container
let container = document.querySelectorAll(".container");
// importer le button remove
let remove = document.querySelectorAll(".buttons .remove");
// importer le boutton like
let like = document.querySelectorAll(".buttons .like_btn");
// importer le total de prix
let total = document.getElementById("totalPrice");

// traitement du boutton plus (+)
for (let i = 0; i <= btn.length - 1; i++) {
  btn[i].addEventListener("click", function () {
    //   console.log(+quantity.innerHTML + 1);
    //   quantity.innerHTML = +quantity.innerHTML + 1;
    quantity[i].innerHTML++;
  });
}

// traitement du boutton moin (-)

for (let i = 0; i <= btn2.length - 1; i++) {
  btn2[i].addEventListener("click", function () {
    //   console.log(+quantity.innerHTML + 1);
    //   quantity.innerHTML = +quantity.innerHTML + 1;
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--;
    }
  });
}

//  traitement totalPrice

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    total.innerHTML = quantity[i].innerHTML * 450;
  });
}
for (let i = 0; i <= btn2.length - 1; i++) {
  btn2[i].addEventListener("click", function () {
    if (total.innerHTML > 0) {
      total.innerHTML = total.innerHTML - 450;
    }
  });
}

// .........traitement remove container
for (let i = 0; i <= remove.length - 1; i++) {
  remove[i].addEventListener("click", function () {
    container[i].remove();
  });
}

// ..........change color of icon like

for (let i = 0; i <= like.length - 1; i++) {
  like[i].addEventListener("click", function () {
    like[i].style.color == "red";
  });
}



