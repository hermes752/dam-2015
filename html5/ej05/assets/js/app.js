(function (){

        var tweet={
            id:"25000000",
            text:"agressjaljafj",
            author:"sean",
            created_at:"mooonnna"};

            //APP.DB.insert(tweet);
             APP.DB.get(tweet.id, function(t){
                console.log(t);
             });


            var success=function (datos){
                console.log(datos);
            };
            
}());