let express = require('express');
let credentialsLoader = require('./getCredentials');

app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

console.log(credentialsLoader.getCredentials());

let port = 8085;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})