//Ska kunna mata in band och musiker
//Ska sparas i JSON
//Ska kunna läsa info från JSON

//Band kan vara arvgivare till musiker
//JSON för band, JSON för musiker
//while true funktion för att se till att namn prompts är 2 eller fler bokstäver
/*
function saveData() {
  fs.writeFileSync(savedInfo, JSON.stringify(null, 2));
}
*/

import PromptSync from "prompt-sync";
import { Musician, createMusician } from "./musician.js";
import { Band } from "./band.js"
import fs from "fs";
const prompt = PromptSync({ sigint: true })

//switch break, ta funktioner från js samt klasser. Spara i JSON.
const musicianInfoData = 'musicianInfo.json';
const bandInfoData = 'bandInfo.json';




console.log("Hello! What would you like to do?")
console.log("1. Create musician")
console.log("2. Show musicians")
console.log("3. Remove musician")
console.log("4. Create band")
console.log("5. Show bands")
console.log("6. Remove band")



let menyOption = prompt("Enter your option - ")

switch (menyOption) {
  case "1":
    const newMusician = createMusician();
    console.log('New musician has been created' + newMusician.name)
    console.log(newMusician)

    const musicianData = JSON.stringify(newMusician, null, 2);
    fs.writeFileSync(musicianInfoData, musicianData)
    break;

  case "2":

    break;

  default:
    console.log("You did not enter a valid option.")
}