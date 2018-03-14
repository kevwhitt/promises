new Promise(function(fulfill, reject) {
    return setTimeout(function() {
        return reject(new Error('REJECTED!'));
    }, 300)
}).then(null, onReject);

function onReject (error) {
    console.log(error.message);
}