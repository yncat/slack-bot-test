var express = require("express");
var app = express();
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}!`);
});
