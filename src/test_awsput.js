const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3();
var params = {
    Bucket: "yncat",
    Key: "test.txt"
};
const v = fs.readFileSync("./test.txt");
params.Body = v;
s3.putObject(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
});

