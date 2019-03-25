const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
      minlength: [2, 'More than 1 character needed'],
    },
    author: {
      type: String,
      trim: true,
      required: [true, 'Give me an author'],
      minlength: [3, 'More author name'],
    },
    pages: Number,
    year: Number,
    publisher: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', BookSchema);
