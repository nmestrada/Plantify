const request = require('request');
const apiKey = 'acc_1892ce407d60f55';
const apiSecret = '3860e0543a9f8fe4947d64549f6a5832';
const imageUrl = 'https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg';
const plantImage ='https://www.ourhouseplants.com/imgs-content/Haworthia-Zebra-Cactus-houseplant.jpg';
const philoImage = 'https://i.etsystatic.com/5216616/r/il/788229/972520318/il_794xN.972520318_dhy5.jpg';
const tomatoImg = 'https://usercontent1.hubstatic.com/13077662_f520.jpg'

module.exports = {
	make_API_call : function(){
		return new Promise((resolve, reject) => {
            request.get('https://api.imagga.com/v2/tags?image_url='+encodeURIComponent(tomatoImg), {json:true}, function (error, response, body) {
            console.log(response.body);
            if (error) reject(error);
            resolve(body)
            }).auth(apiKey, apiSecret, true);
		})
	}};




