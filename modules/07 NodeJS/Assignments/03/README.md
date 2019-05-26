<p>create a module named <code>prom-fs</code> (Promise File System) which provide a promise version of the following File System methods:
<ol>
    <li><code>fs.writeFile()</code></li>
    <li><code>fs.readFile()</code></li>
    <li><code>fs.appendFile()</code></li>
    <li><code>fs.unlink()</code></li>
</ol>
</p>
<p>add an additional method: <code>readFileIfExists</code> which first checks if the specificed file exists. If it does - it returns its content otherwise it returns the error message: "Error: The specified file does not exist"</p>
<p>the module should allow running each of the methods in promise syntax and async-await syntax.</p>
<h2>Examples</h2>
<h3>Original Execution (Using A Callback)</h3>
<code>
<pre>
const fs = require('fs');
...
fs.readFile('demo.html', (err, data) => {
    if (err) return "Error: The specified file does not exist";
    return data;
});
...
</pre>
</code>

<h3>Using <code>prom-fs</code> Module</h3>
<h5>Promise Execution</h5>
<code>
<pre>
const promFs = require('./modules/prom-fs');
...
promFs.readFile("demo.html")
.then( (err, data) => {
    if (err) return "Error: The specified file does not exist";
    return data;
});
...
</pre>
</code>

<h5>async-await Execution</h5>
<code>
<pre>
const promFs = require('./modules/prom-fs');
...
try {
    const data = await promFs.readFile("demo.html");
    return data;
}
catch(ex) {
    return ex;
}
...
</pre>
</code>