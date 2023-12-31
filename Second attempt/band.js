import fs from "fs";
import Band from "./bandClass.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

let bandDisbanded;

export default class Bands {
  #bandList = []; 

  constructor() {
    this.#fetchBandData();
  }

  get bandList() {
    return this.#bandList;
  }

  #fetchBandData() {
    const jsonStringBand = fs.readFileSync("bands.json");
    const data = JSON.parse(jsonStringBand);

    for (let i = 0; i < data.length; i++) {
      this.#bandList.push(new Band(data[i].name, data[i].info, data[i].disbandedYear, data[i].formedYear, data[i].members, data[i].formerMembers));
    }
  }

  printBand() {
    for (let i = 0; i < this.#bandList.length; i++) {
      console.log(`${i + 1}. ${this.#bandList[i].name}`);
    }
  }

  addBandToList(name, info, formedYear, disbandedYear, members, formerMembers) {

    do {
      name = prompt("Enter the band's name - ");
      if (name.length <= 1) {
        console.log("You have to enter at least 2 characters.");
      }
    } while (name.length <= 1);

    info = prompt("Enter any info about the band here if you want - ");

    do {
      formedYear = prompt("Enter the year the band was formed (yyyymmdd) - ");
      if (formedYear.length !== 8) {
        console.log("You did not enter a valid year!");
      }
    } while (formedYear.length !== 8 || isNaN(formedYear));

    do {
      console.log("Is the band still going?");
      console.log("1. Yes");
      console.log("2. No");

      bandDisbanded = prompt("Enter your option -");

      if (bandDisbanded === "2") {
        disbandedYear = prompt("What year did they disband? (yyyymmdd) - ");
        if (disbandedYear.length === 8 && !isNaN(disbandedYear)) {
          console.log(`The band disbanded in ${disbandedYear}.`);
          break;
        } else {
          console.log("You did not enter a valid year!");
        }
      } else if (bandDisbanded === "1") {
        console.log("The band is still going.");
        break;
      } else {
        console.log("Invalid option. Please enter 1 or 2.");
      }
    } while (!validInput);

    if (bandDisbanded == 1) {
      disbandedYear = null;
      do {
        members = prompt("Enter the band's members (separate with commas) - ");
        if (members.length <= 1) {
          console.log("You have to enter at least 2 characters.");
        } else {
          console.log("You have added the members.");
        }
      } while (members.length <= 1);
    }

    if (bandDisbanded == 2) {
      do {
        formerMembers = prompt("Enter the band's former members (seperate with commas) - ");
        if (formerMembers.length < 2) {
          console.log("You have to enter at least 2 characters.");
        } else {
          console.log("You have added the former members.");
        }
      } while (formerMembers.length < 2);
    }

    if (bandDisbanded == 1) {
      console.log("Does the band have any former members?");
      console.log("1. Yes");
      console.log("2. No");
      let formMem = prompt("Enter your option -")
      if (formMem == 1) {
        formerMembers = prompt("Enter the band's former members (seperate with commas) - ");
      }

    } else {
      console.log("You did not add any former members")
    }
    const newBand = new Band(name, info, formedYear, disbandedYear, members, formerMembers,);
    this.#bandList.push(newBand); 
    this.#updateJsonFile(); 
  }

  removeBandFromList(index) {
    this.#bandList.splice(index, 1); 
    this.#updateJsonFile(); 
  }

  #updateJsonFile() {
    let tempList = []; 

    for (let i = 0; i < this.#bandList.length; i++) {

      tempList.push(this.#bandList[i].dataInfoBand());
    }

    fs.writeFileSync('./bands.json', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  getLength() {
    return this.#bandList.length;
  }

  removeBand() {
    this.printBand();

    const index = prompt("Enter the index of the band you want to remove - ");
    const parsedIndex = parseInt(index);

    if (!isNaN(parsedIndex) && parsedIndex >= 1 && parsedIndex <= this.#bandList.length) {
      console.log(`Band at index ${parsedIndex} has been removed.`);
      return this.#bandList[parsedIndex - 1].name;
    } else {
      console.log("Invalid index. Please enter a valid index.");
      return null;
    }
  }

  printBandInfo() {
    const jsonStringBand = fs.readFileSync("bands.json");
    const jsonData = JSON.parse(jsonStringBand);

    jsonData.forEach((band, index) => {
      console.log(`${index + 1}. ${band.name}`);
    });

    const selectedNumber = prompt("Enter the number of the band you want to see info about - ");
    const selectedIndex = parseInt(selectedNumber) - 1;

    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < jsonData.length) {
      const selectedBand = jsonData[selectedIndex];
      console.log(`Name: ${selectedBand.name}`);
      console.log(`Info: ${selectedBand.info}`);
      console.log(`Disbanded year: ${selectedBand.disbandedYear}`);
      console.log(`Formed year: ${selectedBand.formedYear}`);
      console.log(`Members: ${selectedBand.members}`);
      console.log(`Former members: ${selectedBand.formerMembers}`);
    } else {
      console.log("Invalid number or band does not exist.");
    }
  }
} 