var App = App || {Model :{} };
App.Model.Rectangel=(function() {
     //variable privadas
     var _height, Square=App.Model.Square;
     //constructor
    function Rectangel(x, y, width, height) { 

//App.Model.Shape.apply()
// App.Model.Shape.call(x,y); 
// App.Model.Shape.bind(x,y);
//se utilizan para cambiar el contexto del this

// App.Model.Shape.call(this, x,y); en lugar de this ponemos el nombre la instancia y en nugar de "x" e "y" sus propiedades
//en este caso no hemos puesto this porque se esta llamando a si mismo
// .bind y .apply sirven para lo mismo, son tres opciones para hacer lo mismo.

    	 App.Model.Square.call(this,x,y, numero);      
    
        

    }

    //extends en javascript
    Rectangel.prototype=Object.create(App.Model.Square.prototype);
    Rectangel.prototype.constructor=Rectangel;
     Rectangel.prototype.getHeight=function(){
    	return _height;
    };
   
    Rectangel.prototype.setHeight=function(height){
    	_height = (typeof x === 'number') ? height : _height;
    };
    Rectangel.prototype.setY=function(y){
    	_y = (typeof y === 'number') ? y : _y;
    };

    return Rectangel;

   



})();