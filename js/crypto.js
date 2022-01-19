const crypto = require('crypto');

let createHash = (string)=>{
    return crypto.createHash('sha256').update(string).digest('hex');
}




createHash('Govind Singh');