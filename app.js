const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Simple app listening at http://%s:%s', host, port)
})

// ================== Routes ==============================
const commonController = require('./controllers/commonController')

app.get('/', function (req, res) {
    res.send('Hello world')
    console.log('hello')
})

app.post('/', function (req, res) {
    console.log(req.body)
    res.send({data: req.body})
})

// app.get('/xlsx-template', function (req, res) {
//     res.download('public/files/template.xlsx', function (err) {
//         console.log(err)
//     })
// })

app.post('/upload', commonController.uploadFile)
app.get('/upload', function () {console.log('hello222')})