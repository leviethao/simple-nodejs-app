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
        "ImgUrl": "http://ai.tris.vn/origin/http___zm_tris_vn_zm_cgi-bin_nph-zms_monitor_3_user_admin_pass_quangbk06/img_1567556497057.jpg",
        "VideoUrl": "Camera/Events/2019-09-04/255754.mp4",
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
        "ImgUrl": "http://ai.tris.vn/origin/http___zm_tris_vn_zm_cgi-bin_nph-zms_monitor_4_user_admin_pass_quangbk06/img_1567556693032.jpg",
        "VideoUrl": "",
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