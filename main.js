//Ska kunna mata in band och musiker
//Ska sparas i JSON
//Ska kunna läsa info från JSON

//Band kan vara arvgivare till musiker
//JSON för band, JSON för musiker


const fs = require('fs');
const Band = require('./band');
const Musician = require('./musician');

const savedInfo = 'savedInfo.json'

function saveData() {
  fs.writeFileSync(savedInfo, JSON.stringify(null, 2));
}