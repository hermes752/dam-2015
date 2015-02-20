(function() {

    var validarDNI = function(dni) {


        return true;
    };
  
    console.log(validarDNI("123456789A") == false);
    console.log(validarDNI("999999999A") == false);
    console.log(validarDNI("A") == false);
    console.log(validarDNI(undefined) == false);
    console.log(validarDNI({}) == false);



    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = prompt("Mete el numero: ");

    if (numero >= 10000000 && numero < 99999999) {

        var letra = prompt("meter letra: ");
        for (a = 0; a < letras.length; a++) {

            if (letra == letras[a]) {

                document.write("tu DNI es: " + numero + letras[a]);


            }
        }



    } else {

        document.write("mal");
    }


})();
