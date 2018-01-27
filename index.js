const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const http = require('http');
const nodemailer = require('nodemailer');
const sanitizer = require('sanitizer');
const requestSanitizer = require('request-sanitizer')();
const validator = requestSanitizer.validator;
const logger = require('./logging/logger.js');
const cluster = require('cluster');
const  numWorkers = require('os').cpus().length;
const helmet = require('helmet');
const server = '';
const cron = require('node-cron');
const compression = require('compression');
const shell = require('shelljs');
const exec = require('child_process').exec;
const Allocator = require ('malloc');
const GarbageCollector = require ('garbage-collector');
const url = require('url');
app.use(helmet.xssFilter());
const heap = new Buffer (1024 * 1024);
const io = require('socket.io').listen(server);
const allocator = new Allocator (heap); // heap could also be an ArrayBuffer
const gc = new GarbageCollector (allocator, {
 lifetime: 2,
 callbacks: {
   1: offset => {
   },
 },
});

gc.inspect ();
const input = 'Hello World';
const offset = gc.alloc (Buffer.byteLength (input), 1); // 1 is the type tag, it's optional.
heap.write (input, offset);
gc.ref (offset); // increment the reference count
gc.cycle (); // our data is preserved because it has a reference count > 0
gc.inspect ();
gc.sizeOf (offset);
gc.unref (offset); // decrement the reference count by 1
const freed = gc.cycle (); // frees our string and invokes the callback
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
const dir = path.join(__dirname, 'uploads');
app.use(compression());
app.use(express.static(dir));
app.use(express.static(__dirname + '/public' , { maxage: '100d' }));
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/siteMap'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.use(session({
    secret: 'checkwoovlyhere', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
http.createServer(app).listen(port);;
app.get('*.min.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});
app.use('/', require('./routes/index.js'));
process.on('uncaughtException', function(err) {
    console.log(err);
});
console.log('Server is running on :' + port);
var UtfString = require('utfstring');

