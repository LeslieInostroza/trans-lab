/* Holiii acá va tu código también */

let emailContacto = document.getElementById('emailContacto');
let password = document.getElementById('password');
const btnPassword = document.getElementById('btnPassword');
let filter = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//Validar email
btnPassword.addEventListener('click', () =>{
  
  if(emailContacto.value === '' || password.value === ''){
    alert('Llene todos los campos');
    }
    if(!filter.test(emailContacto.value)){
      alert('Su Correo No Es Valido');
    }
    if(password.value.length > 8) {
      alert('contraseña no valida');
    }
    if(isNaN(password.value)){
      alert('Tienen que ser Numeros')
    }
 window.open("menu.html");
});