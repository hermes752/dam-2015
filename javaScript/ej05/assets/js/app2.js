(function() {

    var info = function(str) {
    	if(num && typeof str ==='string'){

    	var tmp=str
    		.trim()
    		.toLowerCase()
    		.replace(/\s/g, '')
	    		.split('')
	    		.reverse()
	    		.join('');
    	    

    		return tmp===str
    		.trim()
    		.toLowerCase()
    		.replace(/\s/g, '')	
    		

    	}else{
    		throw 'no es string'};
    		
    	
    };
  
    console.log(info(' MAYUSCULAS ')===true);
     console.log(info('MAYUSCULAS dddd')===false);
    console.log(info("MAYus"));
    
  







    


    

})();
