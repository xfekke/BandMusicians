const fs = require('fs');
const Band = require('./band');
const Musician = require('./musician');

const savedInfo = 'savedInfo.json'

function saveData() {
  fs.writeFileSync(savedInfo, JSON.stringify(null, 2));
}