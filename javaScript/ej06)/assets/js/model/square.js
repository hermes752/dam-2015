var App = App || {Model :{} };
App.Model.Square=(function() {
     //variable privadas
     var _numero;
     //constructor
    function Square(x, y, lado) { 

//App.Model.Shape.apply()
// App.Model.Shape.call(x,y); 
// App.Model.Shape.bind(x,y);
//se utilizan para cambiar el contexto del this

// App.Model.Shape.call(this, x,y); en lugar de this ponemos el nombre la instancia y en nugar de "x" e "y" sus propiedades
//en este caso no hemos puesto this porque se esta llamando a si mismo
// .bind y .apply sirven para lo mismo, son tres opciones para hacer lo mismo.

    	 App.Model.Shape.call(x,y);      
    	 _lado (typeof radius === 'number') ? lado : 0; /* esto es if ternario*/
        

    }

    
    //extends en javascript
     Square.prototype=Object.create(App.Model.Shape.prototype);
    Square.prototype.constructor=Square;

    Square.prototype.getX=function(){
    	return Square.x;
    };
    Square.prototype.getY=function(){
    	return Square.y;
    };
    Square.prototype.setX=function(numero){
    	Square.x = (typeof x === 'number') ? numero : Square.x;
    };
    Square.prototype.setY=function(numero){
    	Square.y = (typeof y === 'number') ? numero :Square.y;
    };


    return Square;

   



})();