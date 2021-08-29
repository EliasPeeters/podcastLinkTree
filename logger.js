function log(req, url, id) {
    // if (process.env.LOGGER == 'true') {
        if (url == undefined) {
            url = req.route.path
        }
        let data = {
            table: 'logging',
            log_dateTime: new Date(),
            log_uuid: id,
            log_url: url
        }
        console.log(data)
        let query = connection.createQueryStringFromObject(data);
        connection.query(query)
        let timeStamp = new Date();
        console.log(query)
    // }
}

module.exports = {log}