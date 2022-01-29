//path from one of node modules
import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

// multer template
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      // path.extname: get the extention of the filename
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  //types are surrounded by '/ /'
  const filetypes = /jpg|jpeg|png/
  // check if extention of file is same as filetypes
  // test return a boolean value
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  /**
   * A multipurpose internet mail extension, or MIME type,
   *  is an internet standard that describes the contents
   * of internet files based on their natures and formats.
   */
  const mimetype = filetypes.test(file.mimetype)

  //if both true, we go on
  if (extname && mimetype) {
    return cb(null, true)
    // else we callback with a error message
  } else {
    cb('Images only!')
  }
}

// pass as a middleware
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

/**
 * this file will be connected to the /api/upload
 * upload.single : only upload one image each time
 * send back the path of the file to the app
 */
router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router
