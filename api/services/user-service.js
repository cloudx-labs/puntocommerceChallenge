const model = require('../model/user-model');
const stringSimilarity = require("string-similarity");

async function userList() {
    const response = await model.userList();
    return response;
}

async function getCharLengthFromEmail() {
    const emailList = await model.getCharLengthFromEmail();
    const charList = [];
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    emailList.forEach(element => {
        for (var i = 0; i < element.email.length; i++) {
            let charLower = element.email[i].toLowerCase();
            if (!format.test(charLower)) {
                var char = charList.find(c => c.char == charLower);
                if (!char) {
                    var charToAdd = {
                        char: charLower,
                        count: 1
                    }
                    charList.push(charToAdd);
                }
                else {
                    char.count++;
                }
            }
        }
    });
    const response = charList.sort(function (a, b) {
        return b.count - a.count;
    });
    return response;
}

async function getDuplicatedEmail() {
    const data = await model.getDuplicatedEmail();
    const dataList = JSON.parse(JSON.stringify(data));
    const emailList = dataList.map(c => c.email);

    var response = [];

    emailList.forEach(element => {
        var emailListToCompare = emailList.filter(c => c != element);

        var matches = stringSimilarity.findBestMatch(element, emailListToCompare);

        if (matches.ratings.find(c => c.rating >= 0.7)) {
            var responseToAdd = {
                email: element,
                duplicated: []
            }
            matches.ratings.forEach(match => {
                if (match.rating >= 0.7) {
                    responseToAdd.duplicated.push(match.target);
                }
            })
            response.push(responseToAdd);
        }
    });
    return response;
}

module.exports = {
    userList,
    getCharLengthFromEmail,
    getDuplicatedEmail
}