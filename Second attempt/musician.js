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
      birthYear = prompt("Enter the musician's birthyear (yyyymmdd) - ");
      if (birthYear.length !== 8) {
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
    this.#musicianList.push(newMusician); // adds new musician to list
    this.#updateJsonFile(); // updates the json
  }

  removeMusicianFromList(index) {
    var removedMusician = this.#musicianList.splice(index, 1); // removes musician from list
    this.#updateJsonFile(); // updates the json
    return removedMusician;
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

    todaysDate = this.todayDate();

    jsonData.forEach((musician, index) => {
      console.log(`${index + 1}. ${musician.name}`);
    });
  
   
    const selectedNumber = prompt("Enter the number of the musician you want to see info about - ");
    const selectedIndex = parseInt(selectedNumber) - 1;
  
    
    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < jsonData.length) {
      const selectedMusician = jsonData[selectedIndex];
      console.log(`Name: ${selectedMusician.name}`);
      console.log(`Info: ${selectedMusician.info}`);
      console.log(`Birthyear: ${selectedMusician.birthYear}`);
      console.log(`Bands: ${selectedMusician.bands}`);
      console.log(`Former bands: ${selectedMusician.formerBands}`);
    } else {
      console.log("Invalid number or musician does not exist.");
    }
  }
  todayDate() {
    // Date object
    const date = new Date();

    let currentDay= String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth()+1).padStart(2,"0");

    let currentYear = date.getFullYear();

    //will display the date as YYYYMMDD 

    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    console.log("The current date is " + currentDate); 

  }

  countAge() {
    var birthDateStr = musicianList.birthYear;
    
    var todayStr = todayDate();

    var birthYear = parseInt(birthDateStr.substr(0, 4));
    var birthMonth = parseInt(birthDateStr.substr(4, 2)) - 1; 
    var birthDay = parseInt(birthDateStr.substr(6, 2));
  
    var todayYear = parseInt(todayStr.substr(0, 4));
    var todayMonth = parseInt(todayStr.substr(4, 2)) - 1; 
    var todayDay = parseInt(todayStr.substr(6, 2));
  
    var birthDate = new Date(birthYear, birthMonth, birthDay);
    var todayDate = new Date(todayYear, todayMonth, todayDay);
  
    var age = todayYear - birthDate;
  
    if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
      age--;
    }
  
    console.log("Ålder: " + age);

  }

  

} 