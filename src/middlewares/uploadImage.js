const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

const limits = {
  fileSize: 3*1000000
}

const fileFilter = (req, file, cb) => {
  const extName = path.extname(file.originalname)
  if (extName === '.jpg' || extName === '.png' || extName === 'gif' || extName === 'jpeg') {
    cb(null, true)
  } else {
    console.log('errro')
    cb(new Error('Rejected: File accepted only JPG, JPEG, GIF & PNG.'))
  }
}

const upload = multer({
  fileFilter: fileFilter,
  storage: storage,
  limits: limits,
})
module.exports = upload