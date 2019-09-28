const request = require('request'),
    apiKey = 'acc_1892ce407d60f55',
    apiSecret = '3860e0543a9f8fe4947d64549f6a5832';

request.get('https://api.imagga.com/v2', function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    console.log(error)
}).auth(apiKey, apiSecret, true);