const db = require("mouse-db.json");

const express = require("express");
const app = express();

app.use("/api", require(__dirname + "/api.js"));


app.listen(80)
/*
curl -X POST http://localhost/api/ -H 'Cache-Control: no-cache' -H 'Content-Type: application/json' -d '{

}'
*/