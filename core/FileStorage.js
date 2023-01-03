const multer = require('multer');

const {generateRandomHash} = require('../util/hashing');


const storage = multer.diskStorage({
    destination: "images/",
    filename: imageName
})


const imageStorage = multer({
    storage,
    fileFilter: imageFilter
});

const fileStorage = multer({dest: "files/"});


function imageFilter(req, file, callback) {
    ["image/jpeg", "image/jpg", "image/png"].indexOf(file.mimetype) === -1
        ? callback(null, false) : callback(null, true);
}



function imageName(req, file, callback) {
    let newFileName = "" + file.fieldname + "_" + generateRandomHash() + "." + file.mimetype.split('/')[1];
    console.log("new file name: ", newFileName);
    callback(null, newFileName);
}



module.exports = {imageStorage, fileStorage};