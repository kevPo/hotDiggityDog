(function (homeController) {
    
    homeController.init = function (app) {
        
        app.get('*', function(req, res) {
            res.sendFile('index.html', { root: 'public/' });
        });

    };
    
})(module.exports);