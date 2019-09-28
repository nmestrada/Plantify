const express = require('express')
const app = express()
const port = 8080;
const morgan = require('morgan')
const api_helper = require('../utils/getData')

app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/getAPIResponse', (req, res) => {
	api_helper.make_API_call()
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;