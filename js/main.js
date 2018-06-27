/* Holiii acá va tu código también */

let emailContacto = document.getElementById('emailContacto');
let password = document.getElementById('password');
const btnPassword = document.getElementById('btnPassword');
let filter = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//Validar email
btnPassword.addEventListener('click', () =>{
  if(emailContacto.value === '' || password.value === ''){
    }
    if(!filter.test(emailContacto.value)){
      alert('Correo No Valido');
    }
});