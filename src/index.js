const express = require("express");
const bodyParser = require('body-parser');
const Slack = require('slack');
const slack = new Slack();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*

//Slack ����� webuHook ���n���h�V�F�C�N
app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(req.body.challenge);
});
*/

app.post('/', (req, res) => {
    console.log(req.body.event);
    res.setHeader('Content-Type', 'text/plain');
    res.send("");
slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: "CRETBBSV6",
  text: "���́A�с[���Ԃ��[�ڂ��Ƃ����ł��B",
  username: "BW-bot"
},console.log);
});

app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}!`);
});
