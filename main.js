const formulario = document.querySelector('.formulario');

let formularioValido = false;

function comparaNumeros (numeroUm, numeroDois) {
    return numeroDois > numeroUm; 
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroUm = parseFloat(document.querySelector('#numero-um').value);
    const numeroDois = parseFloat(document.querySelector('#numero-dois').value);

    formularioValido = comparaNumeros(numeroUm, numeroDois);

    if (formularioValido) {
        document.querySelector('.sucesso').style.display = 'block';
        document.querySelector('.erro').style.display = 'none';

        document.querySelector('#numero-um').value = '';
        document.querySelector('#numero-dois').value = '';
    } else {
        document.querySelector('.erro').style.display = 'block';
        document.querySelector('.sucesso').style.display = 'none';
    }
})
