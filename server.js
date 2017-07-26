
var express = require('express');    //Express Web Server 
var busboy = require('connect-busboy'); //middleware for form/file upload
var path = require('path');     //used for file path
var fs = require('fs-extra');       //File System - for file manipulation

var app = express();
app.use(busboy());
app.use(express.static(path.join(__dirname, 'public')));

/* ========================================================== 
Create a Route (/upload) to handle the Form submission 
(handle POST requests to /upload)
Express v4  Route definition
============================================================ */
app.route('/upload')
    .post(function (req, res, next) {

        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            try {

                fstream = fs.createWriteStream(__dirname + '/batch/' + filename);
                file.pipe(fstream);
                fstream.on('close', function () {    
                    console.log("Upload Finished of " + filename);              
                    res.send(JSON.stringify({ a: '1' }));           //where to go next
                });

            }
            catch(e){
                console.log(e);
            }
            
        });
    });

app.route('/')
    .get(function (req, res, next) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ a: 1 }));
    });

var server = app.listen(3030, function() {
    console.log('Listening on port %d', server.address().port);
});