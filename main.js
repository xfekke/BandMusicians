//Ska kunna mata in band och musiker
//Ska sparas i JSON
//Ska kunna läsa info från JSON

//Band kan vara arvgivare till musiker
//JSON för band, JSON för musiker
//while true funktion för att se till att namn prompts är 2 eller fler bokstäver

import PromptSync from "prompt-sync";
import { Musician, createMusician } from "./musician.js";
import { Band } from "./band.js"
import { Musician } from "./musician.js";
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
console.log("3. Create musician")
console.log("6. Show musicians")
console.log("4. Remove musician")
console.log("1. Create band")
console.log("5. Show bands")
console.log("2. Remove band")



let menyOption = prompt("Enter your option - ")

switch (menyOption) {
  case "1":
    const newMusician = createMusician();
    console.log('New musician has been created' + newMusician.name)
    console.log(newMusician)
    break;

  case "2":

    break;

  default:
    console.log("You did not enter a valid option.")
}