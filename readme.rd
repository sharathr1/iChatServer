https://node-socket-redis-chat.herokuapp.com/
https://dzone.com/articles/using-redis-with-nodejs-and-socketio

"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "d:\test\mongo db data"

--dbpath  "C:\Users\999951.TCSGEGDC\Documents\TCS Internal\mango"
show dbs
use databaseName
db.auth("admin"	, "admin");


show collections;
db.getCollectionNames();


show users;
db.getUsers();


db.testcollection.insert({"name": "SR", "id": "1"})

db.<collectionName>.insert({field1: "value", field2: "value"})
//
// Insert multiple documents
//
db.<collectionName>.insert([{field1: "value1"}, {field1: "value2"}])
db.<collectionName>.insertMany([{field1: "value1"}, {field1: "value2"}])


db.<collectionName>.save({"_id": new ObjectId("jhgsdjhgdsf"), field1: "value", field2: "value"});



db.<collectionName>.find();
	
db.<collectionName>.find().limit(10);
db.<collectionName>.find({"_id": ObjectId("someid")}, {field1: 1, field2: 1});
	
	    "socket.io-stream": "^0.9.1"
 var uploader = new SocketIOFile(socket, {
        // uploadDir: {			// multiple directories
        // 	music: 'data/music',
        // 	document: 'data/document'
        // },
        uploadDir: 'data', // simple directory
        accepts: ['audio/mpeg', 'audio/mp3'], // chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
        maxFileSize: 4194304, // 4 MB. default is undefined(no limit)
        chunkSize: 10240, // default is 10240(1KB)
        transmissionDelay: 0, // delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
        overwrite: true // overwrite file if exists, default is true.
    });
    uploader.on('start', (fileInfo) => {
        console.log('Start uploading');
        console.log(fileInfo);
    });
    uploader.on('stream', (fileInfo) => {
        console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
    });
    uploader.on('complete', (fileInfo) => {
        console.log('Upload Complete.');
        console.log(fileInfo);
    });
    uploader.on('error', (err) => {
        console.log('Error!', err);
    });
    uploader.on('abort', (fileInfo) => {
        console.log('Aborted: ', fileInfo);
    });