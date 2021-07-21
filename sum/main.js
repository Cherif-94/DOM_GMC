// importer le boutton (+)
let btn = document.querySelectorAll(".btn_plus");
// importer la quantitè 
let quantity = document.querySelectorAll(".qte");
// importer le boutton (-)
let btn2 = document.querySelectorAll(".btn_moin");
// importer le prix 
let prix = document.querySelectorAll(".prix") ;
// console.log("hello it is a " , price)
let container = document.querySelectorAll(".container") ; 
// console.log("this is a " , container) ; 
let remove = document.querySelectorAll(".fas fa-trash") ; 
// console.log("remove test " , remove);

let like = document.querySelectorAll(".far fa-heart") ;
// console.log("like);
let heart = document.querySelectorAll(".heart") ;

let total = document.getElementById("totalPrice") ;


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
    if (quantity[i].innerHTML>0) {
          quantity[i].innerHTML--

    }   
  });
} 

// ................... traitement totalPrice

    // for(i=0 ; i<=btn.length-1 ; i ++) {
    //       btn[i].addEventListener("click", function(){
    //            total[i].innerHTML++

    //       })
    // }



// .........traitement remove container 
for (i = 0 ; i<=remove.length - 1; i++)
{
  remove[i].addEventListener("click" , function() {
      container[i].remove() ;            
  });
}

// ..........change color of icon like 

for (i = 0 ; i<=heart.length - 1 ; i++ ) {
      heart[i].addEventListener("click" , function() {
              if(heart[i].style.color =="black"){
      heart[i].style.color=="red" ; 
}else{
heart[i].style.color="red"
}
      
}); 
}
