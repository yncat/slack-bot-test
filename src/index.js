var express = require("express");
var app = express();
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
app.listen(3000);
