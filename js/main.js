/* Holiii acá va tu código también */

let emailContacto = document.getElementById('emailContacto');
let password = document.getElementById('password');
const btnPassword = document.getElementById('btnPassword');
let filter = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//Validar email
btnPassword.addEventListener('click', () =>{
  
  if(emailContacto.value === '' || password.value === ''){
    alert('Llene todos los campos');
    } else if(!filter.test(emailContacto.value)){
      alert('Su Correo No Es Valido');
    } else if(password.value.length > 8) {
      alert('contraseña no valida, solo numeros y maximo 8');
    } else if(isNaN(password.value)){
      alert('Solo numeros en su contraseña y con un maximo de 8');
    } else (window.open('menu.html'));
  
});