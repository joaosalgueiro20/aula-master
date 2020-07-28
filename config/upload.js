const multer = require('multer');
const path   = require('path');

module.exports = {
    storage : multer.diskStorage({
        destination : path.resolve(__dirname,'..','uploads'),
        filename : (req, file, cb) => {
            let imgExt = path.extname(file.originalname)
            let imgName = path.basename(file.originalname, imgExt)
            cb(null, `${imgName}-${Date.now()}${imgExt}`)
        }
    }),
};