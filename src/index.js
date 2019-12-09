var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Slack からの webuHook をハンドシェイク
app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(req.body.challenge);
});

app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}!`);
});
