const express = require("express");
const app = express();
// TODO: add ssl certs

app.use(express.static('public'));
app.listen(80);