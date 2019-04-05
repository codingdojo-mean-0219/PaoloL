const mongoose = require('mongoose');
const Author = mongoose.model('Author');
mongoose.Promise = global.Promise;

module.exports = {
  index: (req, res) => {
    Author.find({}, (err, author) => {
      res.json(author);
    });
  },
  new: (req, res) => {
    Author.create(req.body, (err, author) => {
      if (err) {
        res.json(err);
      } else {
        res.json(author);
      }
    });
  },
  rate: (req, res) => {
    Author.findBy(req.params.id, (err, author) => {
      if (err) {
        res.json(err);
      } else {
        author.rating.push(req.body);
        author.save();
        res.json({ success: true });
      }
    });
  },
  remove: (req, res) => {
    Author.findByIdAndRemove(req.params.id, err => {
      if (err) {
        res.json(err);
      } else {
        res.json({ success: true });
      }
    });
  },
  show: (req, res) => {
    Author.findById(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.send(err));
  },
  update: (req, res) => {
    Author.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, author) => {
        if (err) {
          res.json(err);
        } else {
          res.json(author);
        }
      }
    );
  },
};
