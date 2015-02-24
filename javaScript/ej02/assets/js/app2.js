(function() {

    var facto = function(num) {
    	var resp=1
    	
    	if(num && typeof num ==='number' && num >0){
    		for(var i=num; i>0; i--){
    			resp *=i
    		}

    	}else{
    		return false;
    	}
    	return resp;
    };
  
    console.log(facto(0) == 1);
    console.log(facto(1) == 2);
    console.log(facto(2) == 3);
    console.log(facto("texto") == false);
    console.log(facto(undefined) == false);
    console.log(facto(-1) == false);
    console.log(facto({}) == false);







    


    

})();