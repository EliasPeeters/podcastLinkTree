let fs = require('fs');
const homedir = require('os').homedir();

function getCredentials() {
    console.log(homedir)
    let file = JSON.parse(fs.readFileSync(`${homedir}/credentials.json`));
    return file;
}

module.exports = {getCredentials};