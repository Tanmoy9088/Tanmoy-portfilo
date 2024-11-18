const li = document.querySelectorAll("li");
const hidden = document.querySelectorAll(".modal");
const close = document.querySelectorAll('.close');
const overlay = document.querySelector('.overlay');
for(let i = 0; i<hidden.length; i++){
li[i].addEventListener("click", function () {
    console.log("hi");
    hidden[i].classList.remove("hidden");
    console.log('hi');
    overlay.classList.remove('hidden');
  });
}
for(let i = 0; i<close.length; i++){
close[i].addEventListener('click',function(){
    hidden[i].classList.add('hidden');
    overlay.classList.add('hidden');
})
}
