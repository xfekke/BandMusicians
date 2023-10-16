//Ska kunna mata in band och musiker
//Ska sparas i JSON
//Ska kunna läsa info från JSON

//Band kan vara arvgivare till musiker
//JSON för band, JSON för musiker

//import PromptSync from "prompt-sync";
import { Musician } from "./musician";
import { Band } from "./band"
const prompt = PromptSync({ sigint: true})
const fs = require('fs');



const musicianInfo = 'musicianInfo.json'
const bandInfo = 'bandInfo.json'
/*
function saveData() {
  fs.writeFileSync(savedInfo, JSON.stringify(null, 2));
}
*/
console.log("Hello! What would you like to do?")
console.log(Musician)
