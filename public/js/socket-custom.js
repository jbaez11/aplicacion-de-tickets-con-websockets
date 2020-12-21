var socket = io();
        //on escuchar 
        socket.on('connect', function(){
            console.log('conectado al servidor');
        });

        socket.on('disconnect',function(){
            console.log('se perdio conexion con el servidor');
        });

        //emit para enviar info 
        socket.emit('enviarMensaje', {
            usuario:'jonathan',
            mensaje: 'holamundo'
        }, function(resp){
            console.log('respuesta server ', resp);
        });

        //escuchar informacion

        socket.on('enviarMensaje', function(mensaje){
            console.log('servidor',mensaje)
        });