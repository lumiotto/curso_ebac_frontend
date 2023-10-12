$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'});
    $('#cpf').mask('000.000.000-00', {placeholder: '___.___.___-__'});
    $('#cep').mask('00.000-000', {placeholder: '__.___-___'});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o seu CEP',
        },

        errorClass: "error",
        
        submitHandler: function(form) {
            input.val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})