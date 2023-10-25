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

do {
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

    case "3": //show musician //WORKS!

      musicianList.printMusicianInfo();

      break;

    case "4": //show band //WORKS!
      bandList.printBandInfo();


      break;

    case "5": //remove musician //WORKS!!
      const removedMusicianName = musicianList.removeMusician();
      const jsonStringBands = fs.readFileSync("bands.json");
      const bandsData = JSON.parse(jsonStringBands);
      var bandsDataCopy = [];

      console.log(removedMusicianName[0].name);

      for (const band of bandsData) {
        const members = band.members.split(", "); // members seperated by commas
        console.log(members);
        const musicianIndex = members.indexOf(removedMusicianName[0].name);
        console.log(musicianIndex);

        if (musicianIndex != -1) {
          members.splice(musicianIndex)

        }

        var membersNew = members.join(", ");
        band.members = membersNew
        if (membersNew != []) {
          bandsDataCopy.push(band);
        }
      }

      fs.writeFileSync("bands.json", JSON.stringify(bandsDataCopy, null, 2));
      break;

    case "6": //remove band //WORKS kind of, does not delete bands from musicians, loops forever //ifall band inte har medlemmar?

      //WIP
      const removedBandName = bandList.removeBand();
      const jsonStringMusician = fs.readFileSync("musician.json");
      const musiciansData = JSON.parse(jsonStringMusician);
      var musicianDataCopy = [];

      console.log(removedBandName[0].members);

      for (const musician of musiciansData) {
        const bands = musician.bands.split(", "); // bands seperated by commas
        console.log(bands);
        const bandIndex = members.indexOf(removedBandName[0].bands);
        console.log(bandIndex);

        if (bandIndex != -1) {
          members.splice(bandIndex);

        }
        console.log(bandIndex);

        var bandsNew = bands.join(", ");
        musician.bands = bandsNew;

        if (bandsNew != []) {
          musicianDataCopy.push(musician);
        }
        console.log(bandsNew);
      }

      break;

    case "A":
      console.log("Exiting the program");
      run = false

      break;


  }
} while (run);













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