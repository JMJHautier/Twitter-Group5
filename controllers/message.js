const pool = require('../pg.js');

const getAllMessages = async (req, res) => {
res.send('All messages')
}

const getSingleMessage = async (req, res) => {
res.send('Single Message')
}

module.exports = {getAllMessages, getSingleMessage}