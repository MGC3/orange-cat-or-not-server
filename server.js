const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8081;

app.use(cors());

app.use(express.static(path.join(__dirname, './static')));

app.listen(port, function() {
  console.log(`Serving static on ${port}`);
});
