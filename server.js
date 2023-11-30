const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const CountriesRouter = require('./server/router/countries');


const port = process.env.NODE_PORT || '8080';
const app = express();

app.use("/", express.static(path.join(__dirname, 'build')));

app.use(cors());

app.use(bodyParser.json());

app.use('/api', CountriesRouter);

app.get('/ping', function (req, res) {
  res.json({ status: 200 });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// start the Express server
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return err;
  }
  console.log(`Server listening at port ${port}`);
});

