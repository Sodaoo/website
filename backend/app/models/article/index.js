// dbConfig:  url: "mongodb://localhost:27017/bezkoder_db"
const dbConfig = require("../../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
  'mongoose': mongoose,
  'url':  dbConfig.url,
  'article': require("./article.model.js")(mongoose)
};

module.exports = db;
