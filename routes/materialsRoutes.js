const mongoose = require('mongoose');
const Material = mongoose.model('materials');

module.exports = (app) => {
  //fetch all materials
  app.get('/api/materials', (req, res) => {
    Material.find()
      .then((material) => res.send(material))
      .catch((err) => res.send(err));
  });

  //add new material
  app.post('/api/materials', (req, res, next) => {
    const { name, identifier, density, cost } = req.body;

    Material.findOne({ name: name }).then((existingMaterial) => {
      if (!existingMaterial) {
        new Material({
          name: name,
          identifier: identifier,
          density: density,
          cost: cost,
        })
          .save()
          .then((material) => res.send(material))
          .catch((err) => res.send(err));
      } else {
        const error = new Error('Material already exists');
        error.statusCode = 409;
        next(error);
      }
    });
  });
};
