const request = require('request');
const fs = require('fs');
const { promisfy } = require('util');

const readFile = promisfy(fs.readFile);
const writeFile = promisfy(fs.writeFile);

apiKey = 'acc_1892ce407d60f55';
apiSecret = '3860e0543a9f8fe4947d64549f6a5832';
imageUrl = 'https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg';

request.get('https://api.imagga.com/v2/tags?image_url='+encodeURIComponent(imageUrl), function (error, response, body) {
// console.log('Status:', response.statusCode);
// console.log('Headers:', JSON.stringify(response.headers));
console.log(response.body);
console.log(error)
const data = response;
}).auth(apiKey, apiSecret, true);