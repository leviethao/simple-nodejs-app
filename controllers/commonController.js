var multer = require('multer')

var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    let folderName
    if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(file.originalname)) {
      folderName = 'images'
    } else if ((/\.(mp4)$/i).test(file.originalname)) {
      folderName = 'videos'
    } else {
      folderName = 'files'
    }

    callback(null, `./public/${folderName}`)
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
  }
})

var upload = multer({ storage: Storage }).array('files', 50) // Field name and max count

module.exports = {
  // upload file
  uploadFile (req, res) { console.log('uploading...')
    upload(req, res, function (err) {
      if (err) {
        res.send({isSuccess: false, fileNames: []})
        console.log('error')
        throw err
      }
      console.log('thanh cong')
      // console.log('file count: ', req.files.length)
      console.log('req: ', req)

      let fileNames = []
      for (let file of req.files) {
        let folderName
        if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(file.filename)) {
          folderName = 'images'
        } else if ((/\.(mp4)$/i).test(file.filename)) {
          folderName = 'videos'
        } else {
          folderName = 'files'
        }
        fileNames.push(`${folderName}/` + file.filename)
        console.log('files: ', file.filename)
      }

      res.send({isSuccess: true, fileNames: fileNames})
    })
  }
}