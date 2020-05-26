const mongoose = require('mongoose');
const { Schema } = mongoose;

const MaterialSchema = new Schema({
  name: String,
  identifier: String,
  density: mongoose.Decimal128,
  cost: mongoose.Decimal128,
});

mongoose.model('materials', MaterialSchema);
