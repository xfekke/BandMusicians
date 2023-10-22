import fs from "fs";
import Band from "./bandClass.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

let bandDisbanded;



export default class Bands {
  #bandList = []; // list with all musician objects

  constructor() {
    this.#fetchBandData();
  }

  get bandList() {
    return this.#bandList;
  }

  // reads all bands in the json 
  #fetchBandData() {
    const jsonStringBand = fs.readFileSync("bands.json");
    const data = JSON.parse(jsonStringBand);

    // getting all methods in bandlist
    for (let i = 0; i < data.length; i++) {
      this.#bandList.push(new Band(data[i].name, data[i].info, data[i].disbandedYear, data[i].formedYear, data[i].members, data[i].formerMembers));
    }
  }

  //prints index and bands list
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
      formedYear = prompt("Enter the year the band was formed (4 numbers) - ");
      if (formedYear.length !== 4 || isNaN(formedYear)) {
        console.log("You did not enter a valid year!");
      }
    } while (formedYear.length !== 4 || isNaN(formedYear));

    do {
      console.log("Is the band still going?");
      console.log("1. Yes");
      console.log("2. No");

      bandDisbanded = prompt("Enter your option -");

      if (bandDisbanded === "2") {
        disbandedYear = prompt("What year did they disband? (4 numbers) - ");
        if (disbandedYear.length === 4 && !isNaN(disbandedYear)) {
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
    } while (true);

    if (bandDisbanded == 1) {
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
    this.#bandList.push(newBand); // adds new band to list
    this.#updateJsonFile(); // updates the json
  }

  removeBandFromList(index) {
    this.#bandList.splice(index, 1); // removes band from list
    this.#updateJsonFile(); // updates the json
  }

  #updateJsonFile() {
    let tempList = []; // creates temp list

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
} 