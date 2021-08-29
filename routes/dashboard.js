function inlcudeInNewArray(A, input) {
    for (element in A) {
        if (A[element].log_uuid == input.log_uuid) {
            return true;
        }
    }
    return false;
}


app.get('/dashboard', async (req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;
    if (logins.includes(id)) {
        let data = await connection.asyncquery('SELECT * FROM logging WHERE log_dateTime > DATE_SUB(CURDATE(), INTERVAL 1 DAY) ORDER BY log_dateTime DESC ');
        let dataSorted = []
        for (element in data) {
            if (!inlcudeInNewArray(dataSorted, data[element])) {
                dataSorted.push(data[element])
            }
            data[element].log_dateTimeNew = data[element].log_dateTime.toString().substring(0, 25)
        }

        let logger = false
        if (process.env.LOGGER == 'true') {
            logger = true;
        } 

        res.render('dashboard', {data, dataSorted, logger})
    } else {
        res.redirect('/login')
    }
    
})