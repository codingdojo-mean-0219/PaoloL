const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

module.exports = function() {
  mongoose.connect('mongodb://localhost/my_first_database');
  const models_path = path.join(__dirname, './../models');
  fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file)();
    }
  });
};
