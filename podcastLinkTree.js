let express = require('express');
let mysqlSetup = require('./mysqlSetup');
let credentialsLoader = require('./getCredentials');

app = express();
credentials = credentialsLoader.getCredentials();
connection = mysqlSetup.getConnection();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

//routes 
let treeRoute = require('./routes/tree');

app.get('*', (req, res) => {
    res.redirect('/tree')
})

let port = 8087;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})