var express = require("express")
var app = express()
var Set = require("collections/set");
var path = require('path');
var os = require('os');

var http = require("http").Server(app)
var io = require("socket.io")(http)
var http2 = require('http');

var Map = require("collections/map");
var fs = require('fs');
var ChatService = require('./chat-service');
var OneSignal = require('./onesingal-service');
var https = require('https');
const httpsProxyAgent = require('https-proxy-agent');
var UsersDetails = require("./UserDetails");

const agent = new httpsProxyAgent("http://proxy-src.research.ge.com:8080");
/*const fileUpload = require('express-fileupload');
app.use(fileUpload());*/


var multer = require('multer')
var storage = multer.memoryStorage()

/*var multerupload = multer({
     dest: 'fileprint/'
})*/
var multerupload = multer({
    storage: storage
})

app.use(express.static(__dirname))
app.set('views', path.join(__dirname, 'views/www'));
/*app.use(express.json())
 */
var bodyParser = require('body-parser')
app.use(bodyParser());
app.use(express.static(__dirname + '/views/www'));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});
const PORT = process.env.PORT || 3000
var server = http.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
    console.log(os.freemem() / 1024 + " :::" + os.release() + "::" +
        os.totalmem() / 1024)
})
var blacklist = [];

app.use(function (req, res, next) {
    if (!blacklist.includes(req.ip))
        next();
    else {
        console.log(" ********* Bloacking IP's ************")
        res.status(403).end('forbidden');
    }
});

function allowed(ip) {
    console.log("Allowed IP ", ip);

    return true;
};
/*var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}));*/
/*app.use(bodyParser.json());
 */

/*var mongoose = require("mongoose")
mongoose.Promise = Promise
var Chats = mongoose.model("Chats", {
    name: String,
    chat: String
})
var localdb = "mongodb://localhost:27017/chat";
mongoose.connect(localdb, {
    useMongoClient: true
}, (err) => {
    console.log("Database connection ... err>>", err)
})
*/
//app.use(express.static(__dirname))


var allClients = [];

var userlist = [];
var userSet = new Set();
var usersList = new Map();

/*const fileUploadE = require('express-fileupload');
app.use(fileUploadE({
    limits: {
        fileSize: 500 * 1024 * 1024
    },
}));*/

app.post('/upload2', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('/somewhere/on/your/server/filename.jpg', function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.post('/upload', multerupload.any(), function (req, res) {
    //  console.log("Req ", req)
    /* if (!req.file) {
         return res.status(400).send('No files were uploaded.');
     }*/
    try {
        console.log("Calling Uploadfile Function ")

        // let reqFile = req.body;
        // console.log("req ", req);
        // console.log("files ", req.files);
        //  console.log("BODY ", req.body);
        console.log("filename ", req.body.filename);
        req.body.file = req.files
        req.files = {};
        // console.log("File Content", req.bod);
        io.sockets.in(req.body.pairID).emit('download', req.body);
        console.log("Download Notification");
        req.body.chat = "File with name " + req.body.filename + " downloaded";
        req.body.file = {}
        io.sockets.in(req.body.pairID).emit('newMsg', req.body);
        console.log("Upload confirmation");
        req.body.chat = "File with name " + req.body.filename + " uploaded ";
        io.sockets.in(req.body.userID).emit('newMsg', req.body);
        /* Storage.uploadFile(reqFile, function (results) {
             console.log('results:', results);
             res.send(results)
         })*/
        res.send(req.body);
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

function removeUserfromMap() {
    userSet.forEach(function (value) {
        console.log(value);
    });
}

function pushMaptoList() {
    userlist = [];
    for (var [key, value] of usersList) {
        console.log(key, " ,", value);
        userlist.push(value);
    }
}

function searchUserlistbyEmail(emailID, dName) {
    if (userlist.some(e => e.email === emailID && e.dName === dName)) {

    }
}

function pushUsertoList(userID, dName, email, pairID, playerID, callback) {
    var user = new UsersDetails();
    user.userID = userID;
    user.dName = dName;
    user.pairID = pairID;
    user.email = email;
    user.playerID = playerID;
    if (!userlist.some(e => e.email === email || e.userID === userID)) {
        console.log('adding user to set:', userID);
        userlist.push(user);
    } else {
        console.log('User already exist', userID);
    }
    console.log('User registration completed for ' + userID)
    callback(user);
}

function popfromList(id) {
    console.log('User removed of ' + id)
    userlist = userlist.filter(function (e) {
        return e.userID != id;
    });
    io.emit('userList', userlist);
}

function addUserObjToMap(userID, pairID) {
    var user = new UsersDetails();
    user.userID = userID;
    user.pairID = pairID;
    addUserToMap(usersList, user);
}

function addUserToMap(usersList, user) {
    console.log(user)
    addValueToList(usersList, user.userID, user)
    usersList.set(user.userID, user);
}

function removeUserfromMap(key) {
    console.log("Removed from userList ", key)
    usersList.delete(key);
}

function addValueToList(map, key, value) {
    map[key] = map[key] || [];
    map[key].push(value);
}

function onDrawing(socket) {
    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}
io.on("connection", (socket) => {
    let ip = socket.handshake.address.split(':')[3];
    console.log(socket.id + " Sockets IP", ip);
    if (blacklist.includes(ip)) {
        console.log("*******************Blocking IP *******************");
        socket.disconnect();
    }
    console.log("Sockets Count...", allClients.length + 1);
    allClients.push(socket);
    addUserObjToMap(socket.id)
    socket.on('disconnect', function () {
        console.log(socket.id, ' Got disconnect!');
        var i = allClients.indexOf(socket);
        allClients.splice(i, 1);
        removeUserfromMap(socket.id);
        popfromList(socket.id);
        console.log("After Sockets removal...", allClients.length);
    });
    socket.on('fileUpload', function (data) {
        console.log("File ", data.filename);
        io.sockets.in(data.pairID).emit('download', data);
        data.chat = "File with name " + data.filename + " downloaded";
        io.sockets.in(data.pairID).emit('newMsg', data);
        data.chat = "File with name " + data.filename + "sent to " + data.dName;
        io.sockets.in(data.userID).emit('newMsg', data);
    });
    onDrawing(socket);
});

app.get('/', function (req, res) {
    console.log("Opening Webapp")
    res.render('views/www/index.html');
});


app.post("/key", async (req, res) => {
    try {
        // console.error(req.body)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})
app.get("/getUserList", (req, res) => {
    try {
        res.send(userlist)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})
app.get("/chats", (req, res) => {

})
app.get("/chats", (req, res) => {
    Chats.find({}, (error, chats) => {
        res.send(chats)
    })
})

app.post("/chats", async (req, res) => {
    try {
        console.log("send .. ", req.body)
        ChatService.emitNewMsg(io, req.body, 'newMsg', function (results) {
            console.log('results:', results);
            res.send(req.body)
        })
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})
app.post("/blacklist", async (req, res) => {
    try {
        console.log("send .. ", req.body)
        if (blacklist.includes(req.body.ip)) {
            console.log("whitelist .. ", req.body.ip)
            blacklist.pop(req.body.ip);
        } else {
            console.log("blacklist  .. ", req.body.ip)
            blacklist.push(req.body.ip);
        }
        res.send(200);
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})
app.post("/push", async (req, res) => {
    try {
        console.log("push .. ", req.body)

        var sendNotification = function (data) {
            var headers = {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Basic ZTdmYmJkZTYtOTMwMC00YjY0LTg0NGYtNGE3NTIwYzlkM2Ux"
            };
            var options = {
                host: "onesignal.com",
                port: 443,
                path: "/api/v1/notifications",
                method: "POST",
                agent: agent,
                headers: headers
            };

            var req = https.request(options, function (res) {
                res.on('data', function (data) {
                    console.log("Response:");
                    console.log(JSON.parse(data));
                });
            });

            req.on('error', function (e) {
                console.log("ERROR:");
                console.log(e);
            });

            req.write(JSON.stringify(data));
            req.end();
        };
        var a = userlist.filter(p => p.userID == req.body.pairID)
        console.log("Filter :", a[0]);
        var palyerId = a[0].playerID;
        console.log("palyerId :", palyerId);

        console.log("palyerId :", palyerId);
        var message = {
            app_id: "e8921aec-c0df-41cb-bd67-5ce5c066095d",
            contents: {
                "en": "Test Message"
            },
            include_player_ids: [palyerId]
        };
        /*         included_segments   include_player_ids: [req.body.playerID]
         */
        sendNotification(message);
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

app.post("/register", async (req, res) => {
    try {
        console.log("request .. ", req.body)
        var requester = usersList.get(req.body.userID)
        pushUsertoList(requester.userID, req.body.dName, req.body.email, req.body.pairID, req.body.playerID, function (results) {
            console.log('results:', results);
            io.emit('userList', userlist);
            res.send(results)
        })

    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})


app.post("/pairing", async (req, res) => {
    try {
        console.log("request for paring ... ", req.body, " length " + usersList.size)
        ChatService.pairUsers(io, usersList, req.body, function (results) {
            console.log('results:', results);
            res.send(req.body)
        })
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})