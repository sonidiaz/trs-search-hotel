// const ApiImportUser = require('./apiImportUser.js')
const cors = require('cors')
const bodyParser = require('body-parser');   

const corsOptions = {
  origin: 'http://127.0.0.1:5500/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// const {results} = require('./data-fake');
function ApiSendData(req, res) {
    res.send({1: 'handleTest'});
    res.status(200);
}


function devServer() {
  return {
    port: 8080,
    allowedHosts: [
    'zapiens.local',
    ],
  }
}

module.exports = devServer;