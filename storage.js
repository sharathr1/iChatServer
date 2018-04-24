module.exports = {
    sum: function (a, b) {
        return a + b
    },
    uploadFile: (inputfile, callback) => {
        console.log("Uploading File ")
        let filepath = __dirname + '/' + Date.now() + '-' + inputfile.name;
        inputfile.mv(filepath, function (err) {
            if (err)
                return res.status(500).send(err);
            console.log('File Uploaded')
            callback('File Uploaded')
        });
    },
    currentDate: function (a) {
        console.log(a + ' Current Date is: ' + new Date().toISOString().slice(0, 10));
    }
}