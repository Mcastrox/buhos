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




document.querySelector("#form-user").addEventListener('submit', function (e) {
  e.preventDefault();
  let data = {
      nombre_reservacion: document.forms.registrar.nombre.value,
      numero_personas: document.forms.registrar.numero.value,
      fecha: document.forms.registrar.fecha.value,
      id_usuario:1
  }
  console.log(data);
  fetch('/reserva', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res => res.json())
      .then(response => {
        Swal.fire(
          ' Reserva',
          'Su reserva se ha realizado con exito',
          'success'
        )
         
      })
      .catch(err => {
          alert("Por favor revise los datos ingresados");
          console.log(err);
      });
});