(function() {

    var par = function(num) {
    
    	
    	if(num && typeof num ==='number'){
    		return (num %2)===0
    			
    		

    	}else{
    		return NaN};
    	
    };
  
    console.log(par(0) == "par");
    console.log(par(1) == "impar");
    console.log(par(2) == "par");
    console.log(par("texto") == false);
    console.log(par(undefined) == false);
    
    console.log(par({}) == false);







    


    

})();