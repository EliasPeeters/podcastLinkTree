let uuid = require('uuid').v4;

logins = []

app.get('/login', (req, res) => {
    let message = req.query.message == undefined? '':req.query.message;
    res.render('login', {message})
})

app.post('/login', (req, res) => {
    if (credentials.podcast.dashboard == req.body.password) {
        let id = uuid();
        logins.push(id);
        res.cookie('id', id);
        res.redirect(`/dashboard`);
    } else {
        res.redirect('/login?message=Wrong Password')
    }
    
})