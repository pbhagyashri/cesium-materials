const mongoose = require('mongoose');
const Material = mongoose.model('materials');

module.exports = (app) => {
  //fetch all materials
  app.get('/api/materials', (req, res) => {
    Material.find()
      .then((material) => res.send(material))
      .catch((err) => res.send(err));
  });

  //find one by id
  app.get('/api/materials/:id', (req, res) => {
    const { id } = req.params;
    Material.findById(id)
      .then((material) => res.send(material))
      .catch((err) => res.send(err));
  });

  //add a new material
  app.post('/api/materials/new', (req, res, next) => {
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
          .catch((err) => next(err));
      } else {
        const error = new Error('Material already exists');
        error.statusCode = 409;
        next(error);
      }
    });
  });

  //edit material
  app.put('/api/materials/:id', (req, res) => {
    const { id } = req.params;

    const { name, identifier, density, cost } = req.body;
    const update = {
      name: name,
      identifier: identifier,
      density: density,
      cost: cost,
    };

    Material.findOneAndUpdate(id, update)
      .then((updatedMaterial) => res.send(updatedMaterial))
      .catch((err) => res.send(err));
  });

  //delete material
  app.delete('/api/materials/:id', (req, res) => {
    const { id } = req.params;
    Material.findByIdAndDelete(id)
      .then(res.send('material deleted sucessfully'))
      .catch((err) => res.send(err));
  });
};
