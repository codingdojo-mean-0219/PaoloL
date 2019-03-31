const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new mongoose.Schema(
  {
    stars: { type: Number, required: [true, 'Title required'], min: 1, max: 5 },
    comment: {
      type: String,
      required: [true, 'Completed field is required'],
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

const CakeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Title required'],
      minlength: 2,
      maxlength: 32,
    },
    image: {
      type: String,
      required: [true, 'Image required'],
      minlength: 2,
      maxlength: 255,
    },
    rating: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

mongoose.model('Cake', CakeSchema);
mongoose.model('Rating', RatingSchema);
