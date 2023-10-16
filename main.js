//Ska kunna mata in band och musiker
//Ska sparas i JSON
//Ska kunna läsa info från JSON

//Band kan vara arvgivare till musiker
//JSON för band, JSON för musiker

import PromptSync from "prompt-sync";
import { Musician } from "./musician.js";
import { Band } from "./band.js"
const prompt = PromptSync({ sigint: true })

//switch break, ta funktioner från js samt klasser. Spara i JSON.
const musicianInfo = 'musicianInfo.json'
const bandInfo = 'bandInfo.json'
/*
function saveData() {
  fs.writeFileSync(savedInfo, JSON.stringify(null, 2));
}
*/
console.log("Hello! What would you like to do?")
console.log("1. Create band")
console.log("2. Remove band")
console.log("3. Create musician")
console.log("4. Remove musician")
console.log("5. Show bands")
console.log("6. Show musicians")

let menyOption = prompt("Enter your option - ")

switch (menyOption) {
  case "1"
    
    break;

  case "2":

    break;

  default:
    console.log("You did not enter a valid option.")
}