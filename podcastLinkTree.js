let express = require('express');
let mysqlSetup = require('./mysqlSetup');
let credentialsLoader = require('./getCredentials');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser')

app = express();
credentials = credentialsLoader.getCredentials();
connection = mysqlSetup.getConnection();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//routes 
let treeRoute = require('./routes/tree');
let loginRoute = require('./routes/login');
let dashboardRoute = require('./routes/dashboard');

app.get('*', (req, res) => {
    res.redirect('/')
})


let port = 8087;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})