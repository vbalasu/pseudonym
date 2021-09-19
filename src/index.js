var codenamize = require('@codenamize/codenamize');
const { v4: uuidv4 } = require('uuid');
let id = uuidv4();
console.log(id);
var result = codenamize(id);
document.querySelector('#result').innerHTML = result;
