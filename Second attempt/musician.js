import fs from "fs";
import Musician from "./musicianClass.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

export default class Musicians {
  #musicianList = []; // list with all musician objects

  constructor() {
    this.#fetchMusicData();
  }

  get musicianList() {
    return this.#musicianList;
  }

  // reads all musicians in the json 
  #fetchMusicData() {
    const jsonStringMusic = fs.readFileSync("musician.json");
    const data = JSON.parse(jsonStringMusic);

    // getting all methods in musicianlist
    for (let i = 0; i < data.length; i++) {
      this.#musicianList.push(new Musician(data[i].name, data[i].info, data[i].birthYear, data[i].bands, data[i].formerBands, data[i].instruments));
    }
  }

  //prints index and musician list
  printMusician() {
    for (let i = 0; i < this.#musicianList.length; i++) {
      console.log(`${i + 1}. ${this.#musicianList[i].name}`);
    }
  }

  addMusicianToList(name, info, birthYear, bands, formerBands, instruments) {
    do {
      name = prompt("Enter the musician's name - ");
      if (name.length <= 1) {
        console.log("You have to enter at least 2 characters.");
      }
    } while (name.length <= 1);

    info = prompt("Enter any info about the musician here if you want - ");

    do {
      birthYear = prompt("Enter the musician's birthyear (4 numbers) - ");
      if (birthYear.length !== 4 || isNaN(birthYear)) {
        console.log("You did not enter a valid year)!");
      }
    } while (birthYear.length !== 4 || isNaN(birthYear));

    do {
      bands = prompt("Enter the musician's bands (separate with commas) - ");
      if (bands.length <= 1) {
        console.log("You have to enter at least 2 characters.");
      }
    } while (bands.length <= 1);

    formerBands = prompt("Enter the musician's former bands if he/she had any - ");

    do {
      instruments = prompt("Enter the musician's instruments (separate with commas) - ");
      if (instruments.length <= 1) {
        console.log("You have to enter at least 2 characters.");
      }
    } while (instruments.length <= 1);


    const newMusician = new Musician(name, info, birthYear, bands, formerBands, instruments);
    this.#musicianList.push(newMusician); // adds new musician to list
    this.#updateJsonFile(); // updates the json
  }

  removeMusicianFromList(index) {
    this.#musicianList.splice(index, 1); // removes musician from list
    this.#updateJsonFile(); // updates the json
  }

  #updateJsonFile() {
    let tempList = []; // creates temp list

    for (let i = 0; i < this.#musicianList.length; i++) {

      tempList.push(this.#musicianList[i].dataInfo());
    }

    fs.writeFileSync('./musician.json', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }



  getLength() {
    return this.#musicianList.length;
  }
} 