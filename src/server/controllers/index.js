const mongo = require('mongodb').MongoClient;
const { get, save } = require('../models')

const url = 'mongodb://localhost:27017/test';

module.exports = {
  getComments: (req, res) => get().then(res.send),
  postComment: (req, res) => save(req.body).then(res.send)
}
