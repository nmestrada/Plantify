
const request = require('request');
const apiKey = 'acc_1892ce407d60f55';
const apiSecret = '3860e0543a9f8fe4947d64549f6a5832';
const filePath = '/path/to/image.jpg';
const imageUrl = {
        image: 'https://images.unsplash.com/photo-1527964105263-1ac6265a569f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    };

request.post({url:'https://api.imagga.com/v2/tags', formData,
    function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    }).auth(apiKey, apiSecret, true);