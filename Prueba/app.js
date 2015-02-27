function valida_envia() {

var imagen = new Image ( );
imagen.src = "cartman.bmp"; //direccion de la imagen
var imagen_comp =imagen.src;
        //Definimos los caracteres permitidos en una dirección de correo electrónico
        var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

        //Validamos un campo de texto como email
        if ((regexp.test(document.form.email.value) == 0) || (document.form.email.value.length = 0)) {
            alert(imagen_comp+" Introduzca una dirección de email válida");
            document.form.email.focus();
            return 0;
        } else {
            var c_email = true;
        }
    }
