
const request = require('request');
const apiKey = 'acc_1892ce407d60f55';
const apiSecret = '3860e0543a9f8fe4947d64549f6a5832';

module.exports = {
        makePostReq : function(photo){
            const formData = {
                image_base64: photo
            };
            return new Promise((resolve, reject) => {
                request.post({url:'https://api.imagga.com/v2/tags', formData: formData},
                    function (error, response, body) {
                    if (error) reject(error);
                    resolve(JSON.parse(body));
                    }).auth(apiKey, apiSecret, true);
            });
}};