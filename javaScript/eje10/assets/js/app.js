window.onload = function() {


    var ul = document.getElementById("lista"),
       
    btn = document.getElementById("add");
    var add = function() {
        e.stopPropagation();
        if (ul) {
            var li = document.createElement('li');
            li.innerText = "Element" + (ul.children.length + 1);
            li.addEventListener('click', remove, false);
            ul.appendChild(li);

        }
    };


    var remove = function( e) {
        if (confirm("Seguro que quieres borrar este elemento ?")) {
            this.parentNode.removeChild(e.target);
        }
    };

    if (btn) {
        btn.addEventListener('click', add, false);
    }

    if (lis.length) {
        for (var i = lis.length - 1; i >= 0; i--) {
            lis[i].addEventListener('click', remove, false);
        }
    }
    if (ul){
        ul.addEventListener('click', remove, false);
    }


};









/*(function() {







    
});
    

*/
