$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
    
    const novaTarefa = $('#nova-tarefa').val();
    const novaLinha = $(`<li>${novaTarefa}</li>`);

    $(novaLinha).appendTo('ul');
    $('#nova-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).css("text-decoration", "line-through");
    })

})