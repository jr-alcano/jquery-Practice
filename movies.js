$(document).ready(function() {
    $('#movieForm').submit(function(event) {
        event.preventDefault();
        const title = $('#title').val();
        const rating = $('#rating').val();
        $('#moviesList').append(`
            <li>${title} - Rating: ${rating}
                <button class="remove">Remove</button>
            </li>
        `);
        $('#title').val('');
        $('#rating').val('');
    });

    $('#moviesList').on('click', '.remove', function() {
        $(this).parent().remove();
    });
});
