window.addEventListener("DOMContentLoaded", function(){

    const img1 = document.querySelector('.anime1');
const img2 = document.querySelector('.anime2');
const img3 = document.querySelector('.anime3');

setTimeout(() => {
  img1.classList.add('disappear'); // descend
  img2.classList.add('move-img2'); // prend sa place
}, 2000);

setTimeout(() => {
  img3.classList.add('move-img3'); // prend place img2
}, 2500);

setTimeout(() => {
   
//   img2.classList.add('disappear'); // disparaît
}, 5000);

})

const cliquer = document.querySelector("#click");
const montrer = document.querySelector(".show");

montrer.style.display = "none";

cliquer.addEventListener("click", function(e){
    montrer.style.display = "block";
})