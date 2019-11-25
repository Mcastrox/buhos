var ventana = document.querySelectorAll(".item-page");
var categoria = document.querySelectorAll(".Part");
var show = categoria[0];

window.onload = function() {
  console.log(show);
  for (let i=0; i<=5; i++){
    ventana[i].addEventListener("click", () => {
      show.classList.add("hidden");
      show = categoria[i];
      show.classList.remove("hidden");
      console.log(show);
  });
}};


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


