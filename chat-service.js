module.exports = {
    uploadFile: (inputfile, callback) => {
        console.log("Uploading File ... ")
        let filepath = __dirname + '/' + Date.now() + '-' + inputfile.name;
        inputfile.mv(filepath, function (err) {
            if (err)
                return res.status(500).send(err);
            console.log('File Uploaded')
            callback('File Uploaded')
        });
    },
    emitNewMsg: (io, body, emitter, callback) => {
        console.log("Uploading File ", body, emitter)
        io.sockets.in(body.pairID).emit(emitter, body);
        callback('Emiited')
    },
    pairUsers: (io, usersList, body, callback) => {
        console.log(body, " Pairing Users ")

        if (body.pairID == undefined) {
            console.log("Pair Ananymous");
            for (var [key, value] of usersList) {
                console.log(key, " ,", value);
                if (key != body.userID && value.pairID == undefined) {
                    //set userid of requester into new user pairid
                    value.pairID = body.userID;
                    console.log(key, "new obj ", value);
                    usersList.set(key, value)

                    //set pairid of new user to requestor
                    var requester = usersList.get(body.userID)
                    requester.pairID = key;
                    usersList.set(body.userID, requester)

                    console.log("after modification requestor ", requester);
                    console.log("after modification newpairer", value);
                    //emitting new user 
                    io.sockets.in(value.userID).emit('pairing', requester);
                    //emitting requestor 
                    io.sockets.in(requester.userID).emit('pairing', value);
                }
                break;
            }
        } else {
            console.log("Pair with request ID");
            //set userid of requester into new user pairid
            var newuser = usersList.get(body.pairID)
            newuser.pairID = body.userID;
            usersList.set(body.pairID, newuser)
            //set pairid of new user to requestor
            var requester = usersList.get(body.userID)
            requester.pairID = newuser.userID;
            usersList.set(body.userID, requester)
            console.log("after modification", usersList);
            //emitting new user 
            io.sockets.in(newuser.userID).emit('pairing', requester);
            //emitting to requestor
            io.sockets.in(requester.userID).emit('pairing', newuser);
        }
        callback('Paired');
    },
    emitPairing: (io, consumerId, body, emitter, callbacks) => {
        console.log("Uploading File ")
        io.sockets.in(consumerId).emit(emitter, body);
        callback('Emiited')
    }
}