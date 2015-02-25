window.onload = function() {

    var enlaces = document.querySelectorAll('.enlace'),
        span = document.querySelectorAll('.adicional.oculto');

    //console.log(span[0].classList.contains('oculto'));


    var muestra = function(e) {
        e.preventDefault();
        if(span.length){
          console.log(span[0].classList.remove('oculto'));  
        }
        if(span.length){
          console.log(span[0].classList.add('oculto'));  
        }



    };
if(enlace.length){
        enlace[0].addEventListener('click',muestra, false);

    }

};









/*(function() {







    
});
    

*/
