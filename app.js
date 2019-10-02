const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cons = require('consolidate');
const port = 8081

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// data base
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://hao:hao12345@ds019886.mlab.com:19886/pixigame1";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var server = app.listen(process.env.PORT || port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Simple app listening at http://%s:%s', host, port)
})

// ===================== database interaction function =================
function insert (collection, document, callback) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            callback(err, null);
            throw err;
        }
        var dbo = db.db("pixigame1");
        dbo.collection(collection).insertOne(document, function(err, res) {
          if (err) {
              callback(err, null)
              throw err;
          }
          callback(null, res)
          db.close();
        });
      });
}

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

app.get('/pixiGame1', function (req, res) {
    res.render('pixi');
})

app.get('/textAnimation', function (req, res) {
    res.render('textAnimation');
})

app.post('/pixiGame1/message', function (req, res) {
    insert('message', req.body, function (err, result) {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).send('OK');
        }
    });
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
        "Date": "2019-09-05T15:21:37",
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
        "Date": "2019-09-05T15:22:53",
        "DateString": "05/09/2019 15:22:53.797",
        "X": 105.973851531744,
        "Y": 10.2544043931305,
        "ZoneId": 5,
        "ZoneInfo": null,
        "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
        "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },

        {
            "Id": 2557551,
            "EventTypeId": 8,
            "EventTypeInfo": {
            "Id": 8,
            "Name": "Xe lạ",
            "Code": "XG",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:23:37",
            "DateString": "05/09/2019 15:23:37.157",
            "X": 105.971783548594,
            "Y": 10.2505865270101,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "9 Nguyễn Thái Học, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
            "VideoUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06",
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
            "Id": 2557552,
            "EventTypeId": 8,
            "EventTypeInfo": {
            "Id": 8,
            "Name": "Xe lạ",
            "Code": "XG",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:21:37",
            "DateString": "05/09/2019 15:21:37.157",
            "X": 105.971783548594,
            "Y": 10.2505865270101,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "9 Nguyễn Thái Học, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
            "VideoUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06",
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
            "Id": 2557553,
            "EventTypeId": 8,
            "EventTypeInfo": {
            "Id": 8,
            "Name": "Xe lạ",
            "Code": "XG",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:22:37",
            "DateString": "05/09/2019 15:22:37.157",
            "X": 105.971783548594,
            "Y": 10.2505865270101,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "9 Nguyễn Thái Học, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
            "VideoUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06",
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
            "Id": 2557554,
            "EventTypeId": 8,
            "EventTypeInfo": {
            "Id": 8,
            "Name": "Xe lạ",
            "Code": "XG",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:25:37",
            "DateString": "05/09/2019 15:25:37.157",
            "X": 105.971783548594,
            "Y": 10.2505865270101,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "9 Nguyễn Thái Học, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
            "VideoUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06",
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
            "Id": 255756,
            "EventTypeId": 2,
            "EventTypeInfo": {
            "Id": 2,
            "Name": "Đám đông",
            "Code": "CROWED",
            "Type": "ANTT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255757,
            "EventTypeId": 1,
            "EventTypeInfo": {
            "Id": 1,
            "Name": "Xả rác",
            "Code": "GARBAGE",
            "Type": "ANTT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 2557571,
            "EventTypeId": 1,
            "EventTypeInfo": {
            "Id": 1,
            "Name": "Xả rác",
            "Code": "GARBAGE",
            "Type": "ANTT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:26:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 2557572,
            "EventTypeId": 1,
            "EventTypeInfo": {
            "Id": 1,
            "Name": "Xả rác",
            "Code": "GARBAGE",
            "Type": "ANTT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:26:53",
            "DateString": "05/09/2019 15:28:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255758,
            "EventTypeId": 3,
            "EventTypeInfo": {
            "Id": 3,
            "Name": "Đám cháy",
            "Code": "FIRE",
            "Type": "ACCIDENT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255759,
            "EventTypeId": 4,
            "EventTypeInfo": {
            "Id": 4,
            "Name": "Tai nạn",
            "Code": "ACT",
            "Type": "ACCIDENT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255760,
            "EventTypeId": 5,
            "EventTypeInfo": {
            "Id": 5,
            "Name": "Vượt đèn",
            "Code": "VD",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255761,
            "EventTypeId": 6,
            "EventTypeInfo": {
            "Id": 6,
            "Name": "Ngược chiều",
            "Code": "NC",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255762,
            "EventTypeId": 7,
            "EventTypeInfo": {
            "Id": 7,
            "Name": "Lấn tuyến",
            "Code": "LT",
            "Type": "TRAFFIC"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255763,
            "EventTypeId": 9,
            "EventTypeInfo": {
            "Id": 9,
            "Name": "Khói",
            "Code": "SMOKE",
            "Type": "ACCIDENT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        {
            "Id": 255764,
            "EventTypeId": 10,
            "EventTypeInfo": {
            "Id": 10,
            "Name": "Đột nhập",
            "Code": "INSTRUSION",
            "Type": "ANTT"
            },
            "EventLevelId": 1,
            "EventLevelInfo": null,
            "Date": "2019-09-05T15:24:53",
            "DateString": "05/09/2019 15:24:53.797",
            "X": 105.973851531744,
            "Y": 10.2544043931305,
            "ZoneId": 5,
            "ZoneInfo": null,
            "Location": "1 Hưng Đạo Vương, Tp. Vĩnh Long",
            "ImgUrl": "http://zm.tris.vn/zm/cgi-bin/nph-zms?monitor=6&user=admin&pass=quangbk06&mode=single",
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
        },
        ]
    res.send(sampleEventData)
})

app.post('/upload', commonController.uploadFile)
app.get('/upload', function () {console.log('hello222')})