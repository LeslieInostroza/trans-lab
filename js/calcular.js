const btnCalculo = document.getElementById('btnCalculo');
let tarifa = document.getElementById('tarifa').value;
let numTarjeta = document.getElementById('numTarjeta');

btnCalculo.addEventListener('click', () => {
    let digTarjeta = numTarjeta.value;
    localStorage.setItem('digTarjeta', digTarjeta)

    let result = '';
    

 fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${digTarjeta}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NO se cumple Promesa");
            }
        }).then((data) => {
					console.log(data);
			
					document.getElementById('tarjeta').innerHTML = 'N° : ' + data['N&ordm; tarjeta bip! '];
					document.getElementById('saldo').innerHTML = 'Su saldo es : ' + data['Saldo  tarjeta'];
					document.getElementById('calculoTarjeta').innerHTML = result;
       });
});