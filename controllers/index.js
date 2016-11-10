(function (controllers) {
    
    var qualtraxController = require('./qualtraxController');
    var homeController = require('./homeController');
    
    controllers.init = function (app) {
        qualtraxController.init(app);
        homeController.init(app);
    }
    
})(module.exports);