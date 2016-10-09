'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
  }
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
