const promFs = require('./prom-fs');

// Show that file doesnt exist
promFs.readFileIfExists("demo.html")
.then( (err, data) => {
    if (err) return "Error: The specified file does not exist";
    return data;
});

promFs.writeFile('demo.html', 'Hello World').then((err,data) => {
    if(err)
})