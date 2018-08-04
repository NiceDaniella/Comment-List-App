const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';
const collectionName = 'commentsListApp'

module.exports = {
  get: () => {
    return Promise((resolve, reject) => {
      mongo.connect(url, (err, db) => {
        if (err) {
          throw err;
        }
        var dbo = db.db('test');
        dbo.collection(collectionName).find().toArray((err, result) => {
          if (err) throw err;
          resolve(results)
          db.close();
        });
      })
    }),
  save: (comment) => {
    return Promise((resolve, reject) => {
      mongo.connect(url, (err, db) => {
        if (err) {
          throw err;
        }
        var dbo = db.db('test');
        dbo.collection(collectionName).insert(comment, (err, result) => {
          if (err) throw err;
          resolve(result)
          db.close();
        });
      });
    })
  }
}