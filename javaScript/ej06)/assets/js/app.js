(function() {
    

    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());
    var s2 = new App.Model.Square();
    s2.setX(5);
    s2.setY(5);
    console.log(s2.getX());
    console.log(s2.getY());
})();



