(function (qualtraxController) {
    
    qualtraxController.init = function (app) {
        
        var express = require('express');
        var request = require('request');

        app.post('/workflows', function(req, res) { 
        console.log(req.body.title);
        var path = req.query.path;
        delete req.query["path"];
        
        request({
                method: 'POST',
                url: 'http://localhost:49339/api/workflows/definitions', 
                body: {
                    "title": req.body.title
                },
                headers: {
                    "Authorization": "Bearer 6A602314-9213-44A7-9F96-9AD748447B7F",
                    "User-Agent:": "IntegrationTests",
                    "Accept": "application/vnd.qualtrax.v1+json",
                    "Content-Type": "application/json"
                }
            }, function (error, response, body) {
                res.send(body);
            });
        });
        
    };
    
})(module.exports);
                    