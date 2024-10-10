$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#tarefa').val();

        if (nomeTarefa) {
            const novoItem = $('<li></li>').text(nomeTarefa);

            $('#taskList').append(novoItem);

            $('#tarefa').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});



