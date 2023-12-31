import fs from "fs";
import Musician from "./musicianClass.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })



export default class Musicians {
  #musicianList = []; 

  constructor() {
    this.#fetchMusicData();
  }

  get musicianList() {
    return this.#musicianList;
  }

  #fetchMusicData() {
    const jsonStringMusic = fs.readFileSync("musician.json");
    const data = JSON.parse(jsonStringMusic);

    for (let i = 0; i < data.length; i++) {
      this.#musicianList.push(new Musician(data[i].name, data[i].info, data[i].birthYear, data[i].bands, data[i].formerBands, data[i].instruments));
    }
  }

  printMusician() {
    for (let i = 0; i < this.#musicianList.length; i++) {
      console.log(`${i + 1}. ${this.#musicianList[i].name}`);
    }
  }

  addMusicianToList(name, info, birthYear, bands, formerBands, instruments) {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedDate = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;

    do {
      name = prompt("Enter the musician's name - ");
      if (name.length <= 1) {
        console.log("You have to enter at least 2 characters.");
      }
    } while (name.length <= 1);

    info = prompt("Enter any info about the musician here if you want - ");

    do {
      birthYear = prompt("Enter the musician's birthyear (yyyymmdd) - ");
      if (birthYear.length !== 8 || birthYear > formattedDate || birthYear < 19200101) {
        console.log("You did not enter a valid year)!");
      }
    } while (birthYear.length !== 8);

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
    this.#musicianList.push(newMusician); 
    this.#updateJsonFile(); 
  }

  removeMusicianFromList(index) {
    var removedMusician = this.#musicianList.splice(index, 1); 
    this.#updateJsonFile(); 
    return removedMusician;
  }

  #updateJsonFile() {
    let tempList = []; 

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

  removeMusician() {
    this.printMusician();
    var removedMusician = null;

    const index = prompt("Enter the index of the musician you want to remove - ");
    const parsedIndex = parseInt(index);

    if (!isNaN(parsedIndex) && parsedIndex >= 1 && parsedIndex <= this.#musicianList.length) {
      removedMusician = this.removeMusicianFromList(parsedIndex - 1);
      console.log(`Musician at index ${parsedIndex} has been removed.`);
      return removedMusician;
    } else {
      console.log("Invalid index. Please enter a valid index.");
    }
  }

  printMusicianInfo() {
    const jsonStringMusic = fs.readFileSync("musician.json");
    const jsonData = JSON.parse(jsonStringMusic);


    jsonData.forEach((musician, index) => {
      console.log(`${index + 1}. ${musician.name}`);
    });

    const selectedNumber = prompt("Enter the number of the musician you want to see info about - ");
    const selectedIndex = parseInt(selectedNumber) - 1;


    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < jsonData.length) {
      const selectedMusician = jsonData[selectedIndex];
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const currentDay = new Date().getDate();

      const birthYearStr = selectedMusician.birthYear.toString();
      const birthYearNum = parseInt(birthYearStr.substring(0, 4));
      const birthMonthNum = parseInt(birthYearStr.substring(4, 6));
      const birthDayNum = parseInt(birthYearStr.substring(6, 8));

      let age = currentYear - birthYearNum;

      if (currentMonth < birthMonthNum || (currentMonth === birthMonthNum && currentDay < birthDayNum)) {
        age--;
      }
      console.log(`Name: ${selectedMusician.name}`);
      console.log(`Info: ${selectedMusician.info}`);
      console.log(`Age: ${age}`);
      console.log(`Bands: ${selectedMusician.bands}`);
      console.log(`Former bands: ${selectedMusician.formerBands}`);
    } else {
      console.log("Invalid number or musician does not exist.");
    }

  }

} 