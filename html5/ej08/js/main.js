$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var content = $('#content');
    //var content= document.getElementById("content");
    var input = document.getElementById("input");
    var status = document.getElementById("status");
    var botoia = document.getElementById("button");
    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;


    //if(!Modernizer.webscokets){
    //  return false;
    //}


    // Abrir la conexion con ws://www.arkaitzgarro.com:1337


    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    socket.onopen = function(e) {


        input.disabled = false;
    };
    var ok = socket.onopen = function(e) {


        input.disabled = false;


    };
    var socketOpen = function(e) {
        console.log('ok');
    };


    var socketClose = function(e) {
        console.log('close');
    };
    var socketError = function(e) {
        console.log('error');
    };
    var handleMessage = function(e) {
        var json;
        try {
            json = JSON.parse(e.data);
        } catch (ex) {
            console.log('error with json message ', e.data);
        }
        if (json) {
            switch (json.type) {

                case 'color':
                    myColor = json.data;
                    status.style.color = myColor;

                    break;
                case 'history':
                    for (var i = 0; i < json.data.length; i++) {
                        var msg = json.data[i];
                        addMessage(msg.author,
                            msg.text,
                            msg.color,
                            new Date(msg.time)
                        );
                    }

                    break;
                case 'message':
                    addMessage(json.data.author,
                        json.data.text,
                        json.data.color,
                        new Date(json.data.time)
                    );

                    break;

            }
        }
    };

    socket.addEventListener('open', socketOpen);
    socket.addEventListener('close', socketClose);
    socket.addEventListener('error', socketError);
    socket.addEventListener('message', handleMessage);


    // 1. Al abrir la conexión, solicitar el nick.

    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"



    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */


    // Send new Tweet
    var enviar = function() {
        ok;
        if (!myName) {
            var balue = input.value;
        }

        socket.send(myName);
        socket.send(input.value);



    };



    if (botoia) {
        botoia.addEventListener("click", enviar, false);
    }

    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
            +(dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }
});
