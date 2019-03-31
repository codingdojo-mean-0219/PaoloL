const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
  index: (req, res) => {
    Cake.find({}, (err, cake) => {
      res.json(cake);
    });
  },
  new: (req, res) => {
    Cake.create(req.body, (err, cake) => {
      if (err) {
        res.json(err);
      } else {
        res.json(cake);
      }
    });
  },
  rate: (req, res) => {
    Cake.findBy(req.params.id, (err, cake) => {
      if (err) {
        res.json(err);
      } else {
        cake.rating.push(req.body);
        cake.save();
        res.json({ success: true });
      }
    });
  },
  remove: (req, res) => {
    Cake.findByIdAndRemove(req.params.id, err => {
      if (err) {
        res.json(err);
      } else {
        res.json({ success: true });
      }
    });
  },
  show: (req, res) => {
    Cake.findOne({ cake: req.params.id }, (err, cake) => {
      if (err) {
        res.json(err);
      } else {
        res.json(cake);
      }
    });
  },
  update: (req, res) => {
    Cake.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, cake) => {
      if (err) {
        res.json(err);
      } else {
        res.json(cake);
      }
    });
  },
};
