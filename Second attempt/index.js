import PromptSync from "prompt-sync";
import Musicians from "./musician.js";
import Musician from "./musicianClass.js";
import Bands from "./band.js";
import Band from "./bandClass.js";

import fs from "fs";

import bandsData from './bands.json' assert { type: 'json' };



const prompt = PromptSync({ sigint: true })
const musicianList = new Musicians();
const bandList = new Bands();
let menyOption; //Meny variable
//1. Add Musician - 2. Add Band - 3. Remove musician - 4. Remove Band - 5. Add musician to band - 6. remove musician from band
//7. Info about musician - 8. Info about band - 9. Quit

let run = true

while (run) {
  console.log("Hello! What would you like to do?")
  console.log("1. Create musician")
  console.log("2. Create band")
  console.log("3. Show musician")
  console.log("4. Show Band")
  console.log("5. Remove musician")
  console.log("6. Remove band")
  console.log("7. Move musician to another band")
  console.log("A. Exit the program")
  menyOption = prompt("Enter your option - ")

  switch (menyOption.trim().toUpperCase()) {

    case "1": //create Musician
      musicianList.addMusicianToList();

      break;

    case "2": //create band
      bandList.addBandToList();


      break;

    case "3": //show musician


      break;

    case "4": //show band


      break;

    case "5": //remove musician
      removeMusician();


      break;

    case "6": //remove band
      removeBand();

      break;

    case "A":
      console.log("Exiting the program");
      run = false

      break;


  }
}

function removeMusician() {
  musicianList.printMusician();
  const val = prompt("Enter the index of the musician you want to remove - ");

  if (Number(val).toString() === "NaN") {
    console.log("You have to enter a number!");
  }

  if (val <= musicianList.getLength() || val >= 1) {
    musicianList.removeMusicianFromList(Number(val) - 1);
  } else {
    console.log(`The number has to be between 1 and ${musicianList.getLength()}`);
  }
}

function removeBand() {
  bandList.printBand();
  const val = prompt("Enter the index of the band you want to remove - ");

  if (Number(val).toString() === "NaN") {
    console.log("You have to enter a number!");
  }

  if (val <= bandList.getLength() || val >= 1) {

    const removedBand = bandList.bandList[Number(val) - 1];
    const removedBandName = removedBand.name;
    bandList.removeBandFromList(Number(val) - 1);
    musicianList.updateMusiciansAfterBandRemoval(removedBandName);
  } else {
    console.log(`The number has to be between 1 and ${bandList.getLength()}`);
  }


}
