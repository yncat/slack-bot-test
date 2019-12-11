const Slack = require('slack');
const slack = new Slack();
slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: "CRETBBSV6",
  text: "私は、びーだぶりゅーぼっとちゃんです。",
  username: "BW-bot"
},console.log);
console.log("OK");
