var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("khan");
  var myobj = [
    { _id: 164, name: 'Chocolate Heaven'},
    { _id: 165, name: 'Tasty Lemon'},
    { _id: 166, name: 'Vanilla Dream'}
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});