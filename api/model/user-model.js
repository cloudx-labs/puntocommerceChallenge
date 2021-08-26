const mysql = require('mysql');
const util = require('util');
const config = require('../../config');

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});

const query = util.promisify(con.query).bind(con);

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


async function userList() {
    const response = query('select id, name, email, username, status from user');
    return response;
}

async function getCharLengthFromEmail() {
    return getUserEmailList();
}

async function getDuplicatedEmail() {
    return getUserEmailList();
}

async function getUserEmailList() {
    const response = await query('select email from user');
    return response;
}

module.exports = {
    userList,
    getCharLengthFromEmail,
    getDuplicatedEmail
}