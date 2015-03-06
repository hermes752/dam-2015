(function (){

        var tweet={
            id:"25000000",
            text:"agressjaljafj",
            author:"sean",
            created_at:"mooonnna"};

            //APP.DB.insert(tweet);

            var success=function (datos){
                console.log(datos);
            };
             APP.DB.getAll(success);

}());