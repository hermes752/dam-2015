window.onload = function() {

    var enlaces = document.getElementsByTagName('a');
    console.log("Numero de enlaces: " + enlaces.length);
    enlaces = document.querySelectorAll("a");
    console.log("Numero de enlaces: " + enlaces.length);
    console.log(enlaces[enlaces.length - 2].href);

    enlaces = document.querySelectorAll('a [href="http://prueba.html"]');
    console.log("Numero de enlaces: " + enlaces.length);
    var count = 0;

    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i) === "http://prueba.html") {
            count++;


        }

    }

    var parrafos=document.querySelectorAll('p');

    if(parrafos.length >2){
    	parrafos[2].querySelectorAll('a');
    	console.log("Numero de enlaces: " + enlaces.length);


    }

};









/*(function() {







    
});
    

*/
