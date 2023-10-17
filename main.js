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
import { Band, createBand } from "./band.js";
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
let musicianData = [];
let bandData = [];
try {
  const oldMusicianData = fs.readFileSync(musicianInfoData);
  musicianData = JSON.parse(oldMusicianData);
} catch (error) {
  musicianData = []
  console.log(error)
}
console.log(musicianData)
switch (menyOption) {
  case "1":
    const newMusician = createMusician();
    musicianData.push(newMusician);


    fs.writeFile(musicianInfoData, JSON.stringify(musicianData, null, 2), (err) => {
      if (err) {
        console.error('An error occured:', err);
      } else {
        console.log('The musician has been saved.');
      }
    });

    break;

  case "2":
    console.log(musicianData);

    break;

  case "4":
    const newBand = createBand();
    bandData.push(newBand);


    fs.writeFile(bandInfoData, JSON.stringify(newBand, null, 2), (err) => {
      if (err) {
        console.error('An error occured:', err);
      } else {
        console.log('The band has been saved.');
      }
    });

    break;

  default:
    console.log("You did not enter a valid option.")
}