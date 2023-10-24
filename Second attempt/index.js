import PromptSync from "prompt-sync";
import Musicians from "./musician.js";
import Musician from "./musicianClass.js";
import Bands from "./band.js";
import Band from "./bandClass.js";

import fs from "fs";

import bandsData from './bands.json' assert { type: 'json' };

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();


// let currentDate = `${year}${month}${day}`;
//   console.log(currentDate); 



const prompt = PromptSync({ sigint: true })
const musicianList = new Musicians();
const bandList = new Bands();
let menyOption; //Meny variable
//1. Add Musician - 2. Add Band - 3. Remove musician - 4. Remove Band - 5. Add musician to band - 6. remove musician from band
//7. Info about musician - 8. Info about band - 9. Quit //Add member to band //Remove Musician from band

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

    case "3": //show musician //WORKS
      musicianList.printMusician();


      break;

    case "4": //show band //WORKS
      bandList.printBand();


      break;

    case "5": //remove musician //WORKS with removing only musician
      musicianList.removeMusician();

      //WIP
      const jsonStringBands = fs.readFileSync("bands.json");
      const bandsData = JSON.parse(jsonStringBands);


      for (const band of bandsData) {
        const members = band.members.split(", "); // members seperated by commas

        const musicianIndex = members.indexOf(removedMusicianName);

        if (musicianIndex !== -1) {
          // removes musician out of the band
          members.splice(musicianIndex, 1);
          band.members = members.join(", ");
          console.log(`Musikern ${removedMusicianName} har tagits bort från bandet ${band.name}.`);
        }
      }


      fs.writeFileSync("bands.json", JSON.stringify(bandsData, null, 2));
      break;


    case "6": //remove band //WORKS
      bandList.removeBand();

      break;

    case "A":
      console.log("Exiting the program");
      run = false

      break;


  }
}













//LISTA är informationen i JSON, det är en separat array
//const LISTA = JSON.parse(fs.readFileSync("min json fil.json"))
//console.log(LISTA);
//LISTA.push("en msuiker t ex") //Här lägger vi till nytt objekt //lista.musiker = "Bengt"
//LISTA.sort //sortera
//fs.writeFileSync(LISTA)

//data.push("Bengt") --- data.push("Personer")

//const index = lista.findIndex((a) => a === "Emil") //Nu är Emil 0, position 1

//LISTA[index] = {
//  name: lista[index],
//  age: 54
//} Nu är Emil ett objekt och har age + name

//måste kunna välja de instrument