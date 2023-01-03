const {fileStorage, imageStorage} = require('../core/FileStorage');

class FileController {

    static uploadimage = imageStorage.single('image');


}

module.exports = FileController;