'use strict';

function concatenateStrings(value1, value2) {
    return "".concat(value1,value2);
}

function getStringLength(value) {
    return value.length;
}

function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
    return value.slice(7,-1);
}

function getFirstChar(value) {
    return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

function repeatString(value, count) {
    let res='';
    for (let i = 0; i < count; i++){
        res += value;
    }
    return res;
}

function removeFirstOccurrences(str, value) {
    return str.replace(value,'');
}

function unbracketTag(str) {
    return str.slice(1,-1);;
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function extractEmails(str) {
    return str.split(';');
}

function getRectangleString(width, height) {
    var total = '';

    function getHeader(width){
        total +='┌';
        for(let i = 0; i < width-2; i++){
            total += '─';
        }
        total += '┐\n';
    }

    function getBody(width, height){
        for(let i = 0; i < height - 2; i++){
            total += '│';
            for(let j = 0; j < width-2; j++){
                total += ' ';
            }
            total += '│\n';
        }
    }

    function getFooter(width){
        total +='└';
        for(let i = 0; i < width-2; i++){
            total += '─';
        }
        total += '┘\n';
    }

    getHeader(width);
    getBody(width, height);
    getFooter(width);
    console.log(total);
    return total;
}

function encodeToRot13(str) {
    var str2 = '';
    for(let i = 0; i < str.length; i++){
        if(/[a-zA-Z]/.test(str[i])){
            let x = str[i].charCodeAt()
            if(/[a-mA-M]/.test(str[i])){
                str2 += (String.fromCharCode(x + 13));
            } else {
                str2 += (String.fromCharCode(x - 13));
            }
        } else {
            str2 +=str[i];
        }
    }
    return str2;
}

function isString(value) {
    if(value){ 
        return typeof value.valueOf() === 'string';
    }
    return false;
}

function getCardId(value) {
    var cards = "'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'"
    var arr = cards.replace(/'/g, '').split(',');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
