var sql = require("mssql");

var ada="ada";

exports.ada=ada;
exports.getBlog=getBlog;
exports.getBlogPromise=getBlogPromise;
 
var webconfig = {
    server: "server",
    port:"port",
    database:"database",
    user:"username",
    password:"password"
};
 
 function getBlogPromise()
 {

    return new Promise ((resolve, reject) =>{

    var conn = new sql.ConnectionPool(webconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
             
            console.log(error);
            return;
        }
         
        req.query("SELECT  * FROM Table ",function(err, redocrset){
            if(err)
            {
                 
            }
            else{

                for(var i=0; i<redocrset.recordset.length; i++)
                {
                    console.log(i);
                }

                var results=redocrset.recordset;
                return resolve(results);
            }
             
        })
         
    })
});

 }
 
function getBlog(req,res){
     
    var conn = new sql.ConnectionPool(webconfig);
    var req = new sql.Request(conn);

    var result=null;
     
    conn.connect(function(error){
         
        if(error){
             
            console.log(error);
            return;
        }
         
        req.query("SELECT * FROM Table ",function(err, redocrset){
            if(err)
            {
                 
            }
            else{

                for(var i=0; i<redocrset.recordset.length; i++)
                {
                    console.log(i);
                }

                result=redocrset.recordset;
            }
             
        })
         
    })

    console.log("DataAccess :"+result);
    return result;

}