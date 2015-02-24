var c=function(frase){



var array=[frase];
for(a=0;a<array.length;a++){

	for(b=array.length;b>0;b--){

		if(array[a]==array[b]){
			document.write("son iguales")
		}else
		{	
				document.write("no son iguales")
		}
	}
}



}
c("oooo");
