(function() {

var validar_email=/^\w([\w.\-]*\w)?@[a-zA-Z-Z0-9]([\w.\-]*\w)?[a-zA-Z]{2,3}$/; //si no se pone la barra antes del guion lo pondran como un rango

console.log(validar_email.test("hola@arkaitzgarro.com")===true);
console.log(validar_email.test("arkaitz.garro@gmail.com")===true);
console.log(validar_email.test("@arkaitzgarro.com")===false);






    


    

})();