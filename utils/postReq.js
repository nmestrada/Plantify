
const request = require('request');
const fs = require('fs');
const apiKey = 'acc_1892ce407d60f55';
const apiSecret = '3860e0543a9f8fe4947d64549f6a5832';

module.exports = {
        makePostReq : function(filePath){
            const formData = {
                image: fs.createReadStream(filePath)
            };
            return new Promise((resolve, reject) => {
                request.post({url:'https://api.imagga.com/v2/tags', formData: formData},
                    function (error, response, body) {
                    console.log(response.body);
                    if (error) reject(error);
                    resolve(body)
                    }).auth(apiKey, apiSecret, true);
            });
}};