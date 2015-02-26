HTMLFormElement.prototype.validate = function() {
    var validator = {
       
        required: function(val) {
        	return val!==undefined && val !==null;



                
            },
            email: function(val) {
                
                return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(val);
                

            },
           

            contraseña: function(val) {
                
                return this.required(val) && val.length>6 && /[a-z]/.test(value)&& /[A-Z]/.test(value) &&/[0-9]/.test(value);

            }


    };

    var required = document.querySelectorAll('.required');
    var emails = document.querySelectorAll('.required');
 
    var validate = function(e) {
        console.log("validando");

        var errors = [];
        if (required) {
            for (var i = required.length - 1; i >= 0; i--) {
                var input = required[i];
                if(input.type==='checkbox' && !input.checked){
                	errors.push(this.name+ "no esta marcado");
                }else if(input.type==='password'){
                	if(validator.password(input.value)){
                		errors.push(this.name+ 'no es un pasword valido');
                	}
                }else
                if (!validator.required(input.value)) {
                    errors.push(input.name + ' es requerido');
                }
            }
        }
        if (errors.length) {
            alert(errors.join('\n'));
            e.preventDefault();
        }

    };
 

   



    this.addEventListener('submit', validate, false);

};
