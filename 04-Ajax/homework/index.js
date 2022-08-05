const route = 'http://localhost:5000/amigos/';

//Cuando se carge la pagina
window.onload = () => {
    //obtener los amigos
    $.get(route, function (friends) {
        console.log(friends);
        //Mostrar los amigos en pantalla, añadiendolos a la lista
        friends.forEach(amigo => {
            $('#lista').append(`<li>id:${amigo.id} - name: ${amigo.name} </li>`)
        });

        //Ocultando el spinner de carga
        document.getElementById('image').style.display = 'none';
    })
}

function showFriends(newfriends) {
    $('#lista').empty();
    newfriends.forEach(amigo => {
        $('#lista').append(`<li>id:${amigo.id} - name: ${amigo.name} </li>`)
    });
}


$('#boton').click(function () {
    $.get(route, function (friends) {
        console.log(friends);
        friends.forEach(amigo => {
            $('#lista').append(`<li>id:${amigo.id} - name: ${amigo.name} </li>`)
        });

        document.getElementById('image').style.display = 'none';
    })
})

$('#search').click(function () {
    let id = $('#input').val();

    if (id) {
        $.get(route + id, function (friend) {
            $('#amigo').text(friend.name);
        });
    } else {
        alert('Por favor insertar un valor')
    }
});

$('#delete').click(function () {
    let id = $('#inputDelete').val();

    if (id) {
        $.ajax({
            url: route + id,
            type: 'DELETE',
            success: function (result) {
                showFriends(result);

                $('#success').text('Your friend has been deleted!')
                document.getElementById('success').style.color = 'green';
            }
        })
    } else{
        alert('Debes insertar un id');
    }
})
