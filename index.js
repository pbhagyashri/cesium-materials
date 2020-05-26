const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Material');

//connect application with mongoose
mongoose.connect(keys.mongoURL);
mongoose.set('useFindAndModify', false);

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

require('./routes/materialsRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
