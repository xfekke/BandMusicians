import PromptSync from "prompt-sync";
import { Musician } from "./musicianIndex.js";
import { Band } from "./bandIndex.js";
import fs from "fs";
const prompt = PromptSync({ sigint: true })
const musicianInfoData = 'musicianInfo.json';
const bandInfoData = 'bandInfo.json';
//1. Add Musician - 2. Add Band - 3. Remove musician - 4. Remove Band - 5. Add musician to band - 6. remove musician from band
//7. Info about musician - 8. Info about band - 9. Quit

const newMusician = ''; //Musician created in case 1
let menyOption; //Meny variable
let existingMusician = []; //Musicians in the JSON
let updatedMusician = []; //New variable for musicians to save in JSON

try {
  const jsonMusician = fs.readFileSync(musicianInfoData);
  existingMusician = JSON.parse(jsonMusician);
} catch (error) {
  existingMusician = []
  console.error("Error reading JSON file" + error);
}

while (true) {
  console.log("Hello! What would you like to do?")
  console.log("1. Create musician")
  console.log("2. Show musicians")
  console.log("3. Remove musician")
  console.log("4. Create band")
  console.log("5. Show bands")
  console.log("6. Remove band")
  menyOption = prompt("Enter your option - ")

  switch (menyOption) {
    case "1":
      const newMusician = createMusician();


      break;


    case "2":
      console.log(jsonMusician);

      break;

  }
}


function createMusician() {
  let name = '';
  let birthYear = '';
  let bands = '';
  let instruments = '';
  let info = '';
  let formerBands = '';

  do {
    name = prompt("Enter the musician's name - ");
    if (name.length < 2) {
      console.log("You have to enter at least 2 characters!");
    }
  } while (name.length < 2);

  info = prompt("Enter any info about the musician here if you want - ");

  do {
    birthYear = prompt("Enter the musician's birthyear (4 numbers) - ");
    if (birthYear.length != 4 || isNaN(birthYear)); {
      console.log("You did not enter a valid year!");
    }
  } while (birthYear.length != 4 || isNaN(birthYear));


  do {
    bands = prompt("Enter the musician's current bands (separate with commas) -");
    if (bands.length < 2) {
      console.log("You have to enter at least 2 characters!");
    }
  } while (bands.length < 2);

  formerBands = prompt("Enter the musician's former bands if he/she had any (separate with commas) - ");

  do {
    instruments = prompt("Enter the musician's instruments (separate with commas) - ");
    if (instruments.length < 2) {
      console.log("You have to enter at least 2 characters!");
    }
  } while (instruments.length < 2);

  const newMusician = new Musician(name, info, birthYear, bands, formerBands, instruments);
  console.log(newMusician);

  let savedMusician = newMusician + existingMusician;


  savedMusician.push(musicianInfoData);

  console.log(updatedMusician);
  console.log("The musician has been saved!");
  console.log(newMusician);



  fs.writeFile('musicianInfo.json', JSON.stringify(newMusician, null, 2), (err) => {
    console.log("Hello");
    if (err) {
      console.error("An error occurred: " + err);
    } else {
      console.log("Musician has been saved to the JSON.");
    }
  }); console.log("Bye");
}

