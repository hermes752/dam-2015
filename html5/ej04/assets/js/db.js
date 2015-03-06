var APP = APP || {};

APP.DB = (function() {

            var db,
                cfg = {
                    name: 'Twitter.db',
                    versio: 1.0,
                    description: 'Twitter Database',
                    size: 1 * 1024 * 1024
                },
                createTable = 'CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY, text TEXT, author TEXT, created_at INTEGER);';

            try {

                db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
            } catch (e) {
                console.log(e);
            }

            if (db) {
                var createSchema = function(tx) {

                    tx.executeSQL(createTable, [], function(tx, results) {
                        console.log('Table tweet created');
                    }, function(tx, error) {
                        console.log("DB error" + error);
                    });


                };
                db.transaction(function(tx) {});
            }


            var insert = function(tweet) {
                var sql = "INSERT INTO tweets VALUES(?,?,?,?);";

                db.transaction(function(tx) {

                        tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.created_at], function(tx, results) {
                                console.log("listo");
                            });
                        });


                };

var getAll=function(){
    db.transaction(function(tx){
        var sql="SELECT * FROM tweets ORDER BY created_at DESC";
        tx.executeSql(sql,[],function(tx, results){
           var arr=[];
            for(var i=results.rows.leng-1; i>=0;i--){
                arr.push(results.rows.item(i));
            } 
            return arr;
        });
    });
};

                return {
                    "insert": insert,
                    "getAll":getAll

                };


            })();
