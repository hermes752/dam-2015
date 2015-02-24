(function() {

    var info = function(str) {
    	
    	
    	if(num && typeof str ==='string'){
    		if(str ===str.toLowerCase()){
    			console.log('minusculas');

    		}else if(str===str.toUpperCase()){
    		
    		console.log('mayusculas');
    	}else{'mezcla'}
    			
    		

    	}else{
    		throw 'no es string'};
    		
    	
    };
  
    console.log(info("MAYUSCULAS"));
    console.log(info("MAYus"));
    
  







    


    

})();