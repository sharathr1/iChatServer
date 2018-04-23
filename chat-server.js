var express = require("express")
var app = express()
var Set = require("collections/set");

var http = require("http").Server(app)
var io = require("socket.io")(http)
var bodyParser = require("body-parser")
var Map = require("collections/map");

var fs = require('fs');
var Storage = require('./storage');
var ChatService = require('./chat-service');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(__dirname + '/views'));
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
var UsersDetails = require("./UserDetails");

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
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

var allClients = [];
var userlist = [];
var userSet = new Set();
var usersList = new Map();

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

function pushUsertoList(userID, dName, email, pairID, callback) {
    var user = new UsersDetails();
    user.userID = userID;
    user.dName = dName;
    user.pairID = pairID;
    user.email = email;
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
    console.log("Socket is connected...", socket.id);
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
var server = http.listen(9090, () => {
    console.log("Well done, now I am listening on ", server.address().port)
})

app.get('/', function (req, res) {
    console.log("Opening Webapp")
    res.render('chat.html');
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
app.post("/register", async (req, res) => {
    try {
        console.log("request .. ", req.body)
        var requester = usersList.get(req.body.userID)
        pushUsertoList(requester.userID, req.body.dName, req.body.email, req.body.pairID, function (results) {
            console.log('results:', results);
            io.emit('userList', userlist);
            res.send(results)
        })
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})
app.post('/upload', function (req, res) {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }
    try {
        let reqFile = req.files.file;
        console.log("Calling Uploadfile Function ")
        Storage.uploadFile(reqFile, function (results) {
            console.log('results:', results);
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