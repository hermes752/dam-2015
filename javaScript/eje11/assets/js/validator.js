HTMLFormElement.prototype.validate = function() {
        var validate=function(){
        	required: function(val){
return false;
        	}
        	email:function(val){

        	}
        

        };
        this.addEventListener('submit', validate, false);


};

var required=this.querySelectorAll('.required');
document.getElementById('login').validate();




/*(function() {







    
});
    

*/
