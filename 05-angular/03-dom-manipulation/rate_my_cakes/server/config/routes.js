const cakes = require('./../controllers/cakes');

module.exports = app => {
  app.get('/cakes', cakes.index),
    app.post('/cakes', cakes.new),
    app.post('/cakes/:id', cakes.rate),
    app.get('/cakes/:id', cakes.show),
    app.put('/cakes/:id', cakes.update),
    app.delete('/cakes/:id', cakes.remove);
};
