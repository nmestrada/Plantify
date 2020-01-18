const express = require('express')
const app = express()
const port = 8000;
const morgan = require('morgan')
const api_helper = require('../utils/getData')
const apiPostReq = require('../utils/postReq')

app.use(morgan('dev'))
app.use(express.json({limit: '50mb', extended: true})) //had to change this property to send base64 image
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => res.send('Hello There!'))

app.get('/getAPIResponse', (req, res) => {
	api_helper.make_API_call()
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
});
app.post('/getAPIResponse', (req,res) => {
    const photo = req.body.photo;
    apiPostReq.makePostReq(photo)
    .then(response => {
        res.json(response)
    })
    .catch(error=> {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;