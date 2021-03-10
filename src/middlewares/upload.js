const multer = require('multer');
const multerUpload = require('../middlewares/uploadImage')

function uploadImage (fieldName) {
  return (req, res, next) => {
    multerUpload.single(fieldName)(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.json({message: 'error'})
      } else if (err) {
        // An unknown error occurred when uploading.
        res.json({message: 'error'})
      }
      // Everything went fine.
      next()
    })
  }
}
module.exports = uploadImage