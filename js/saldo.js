
		const btnSaldo = document.getElementById('btnSaldo');
		let numTarjeta = document.getElementById('numTarjeta');
		numTarjeta.value = localStorage.getItem('numTarjeta');
		
    btnSaldo.addEventListener('click', () => {
			
			let digTarjeta = numTarjeta.value;
			localStorage.setItem('difTarjeta', digTarjeta)
			

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
					document.getElementById('fecha').innerHTML = 'Fecha y Hora : ' + data['Fecha saldo'];
       });

		});
		