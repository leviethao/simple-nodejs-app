const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const port = 8081

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

var server = app.listen(process.env.PORT || port, function () {
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

app.get('/getEventData', function (req, res) {
    let sampleEventData = [
        {
        "Id": 255754,
        "EventTypeId": 8,
        "EventTypeInfo": {
        "Id": 8,
        "Name": "Xe lạ",
        "Code": "XG",
        "Type": "TRAFFIC"
        },
        "EventLevelId": 1,
        "EventLevelInfo": null,
        "Date": "05/09/2019 15:21:37",
        "DateString": "05/09/2019 15:21:37.157",
        "X": 105.971783548594,
        "Y": 10.2505865270101,
        "ZoneId": 5,
        "ZoneInfo": null,
        "Location": "9 Nguyễn Thái Học, Tp. Vĩnh Long",
        "ImgUrl": "images/hinhcamera.png",
        "VideoUrl": "http://213.226.254.135:91/mjpg/video.mjpg",
        "DetectCCTVId": 23,
        "DetectCCTVInfo": {
        "Id": 23,
        "Code": null,
        "Name": null,
        "X": 0,
        "Y": 0,
        "Location": "9 Nguyễn Thái Học, Tp. Vĩnh Long"
        },
        "IsManulaDetect": false,
        "IsEnd": true,
        "Note": "",
        "IsActive": true
        },
        {
        "Id": 255755,
        "EventTypeId": 8,
        "EventTypeInfo": {
        "Id": 8,
        "Name": "Xe lạ",
        "Code": "XG",
        "Type": "TRAFFIC"
        },
        "EventLevelId": 1,
        "EventLevelInfo": null,
        "Date": "05/09/2019 15:24:53",
        "DateString": "05/09/2019 15:24:53.797",
        "X": 105.973851531744,
        "Y": 10.2544043931305,
        "ZoneId": 5,
        "ZoneInfo": null,
        "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
        "ImgUrl": "images/hinhcamera2.png",
        "VideoUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06",
        "DetectCCTVId": 24,
        "DetectCCTVInfo": {
        "Id": 24,
        "Code": null,
        "Name": null,
        "X": 0,
        "Y": 0,
        "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long"
        },
        "IsManulaDetect": false,
        "IsEnd": true,
        "Note": "",
        "IsActive": true
        }
        ]
    res.send(sampleEventData)
})

app.post('/upload', commonController.uploadFile)
app.get('/upload', function () {console.log('hello222')})