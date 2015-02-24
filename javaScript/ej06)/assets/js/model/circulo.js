var App = App || {Model :{} };
App.Model.Circulo=(function() {
     //variable privadas
     var _radius;
     //constructor
    function Radius(x, y, radius) { 

//App.Model.Shape.apply()
// App.Model.Shape.call(x,y); 
// App.Model.Shape.bind(x,y);
//se utilizan para cambiar el contexto del this

// App.Model.Shape.call(this, x,y); en lugar de this ponemos el nombre la instancia y en nugar de "x" e "y" sus propiedades
//en este caso no hemos puesto this porque se esta llamando a si mismo
// .bind y .apply sirven para lo mismo, son tres opciones para hacer lo mismo.

    	 App.Model.Shape.call(x,y);      
        _radius= (typeof radius === 'number') ? radius : 0; /* esto es if ternario*/
        

    }
    //extends en javascript
    Circulo.prototype=Object.create(App.Model.Shape.prototype);
    Circulo.prototype.constructor=Circulo;

 Square.prototype.getArea=function(){
    	return Math.PI * Math.pow(radius, 2);
    };
    Square.prototype.getRadio=function(){
    	return _raidus;
    };

    Square.prototype.setRadio=function(radius){
    	_radius = (typeof radius === 'number') ? numero : _radius;
    };
    return Circulo;

   
radius


})();
