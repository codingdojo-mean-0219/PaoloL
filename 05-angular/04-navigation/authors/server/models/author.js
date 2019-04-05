const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name field is required'],
      minlength: [2, 'Name must be longer than 15 chars!'],
      maxlength: [64, 'Name must be shorter than 15 chars!'],
    },
  },
  { timestamps: true }
);

AuthorSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

mongoose.model('Author', AuthorSchema);
