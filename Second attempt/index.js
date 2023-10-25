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
let menyOption;

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

    case "1": 
      musicianList.addMusicianToList();

      break;

    case "2": 
      bandList.addBandToList();

      break;

    case "3": 
      const today = new Date();

      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      const formattedDate = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;

      console.log(formattedDate);
      musicianList.printMusicianInfo();

      break;

    case "4":
      bandList.printBandInfo();

      break;

    case "5":
      const removedMusicianName = musicianList.removeMusician();
      const jsonStringBands = fs.readFileSync("bands.json");
      const bandsData = JSON.parse(jsonStringBands);
      var bandsDataCopy = [];

      for (const band of bandsData) {
        const members = band.members.split(", "); 
        const musicianIndex = members.indexOf(removedMusicianName[0].name);

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

    case "6":
      const removeBandName = bandList.removeBand();
      const jsonStringMusician = fs.readFileSync("musician.json");
      const musiciansData = JSON.parse(jsonStringMusician);
      const musicianDataCopy = [];

      for (const musician of musiciansData) {

        let bands = musician.bands;

        bands = bands.split(', ')

        let bands_new = "";
        for (let band of bands) {
          if (band !== removeBandName)
            bands_new += band + ", "
        }
        bands_new = bands_new.substring(0, bands_new.length - 2)
        musician.bands = bands_new;
        musicianDataCopy.push(musician);
      }
      fs.writeFileSync("musician.json", JSON.stringify(musicianDataCopy, null, 2));

      break;

    case "A":
      console.log("Exiting the program");
      run = false

      break;

  }
} while (run);
