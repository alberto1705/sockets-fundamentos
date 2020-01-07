var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar 'ON'
socket.on('disconnect', function() {
    console.log('Pedimos conexion con el servidor.');
});

//Enviar información 'EMIT'
socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});