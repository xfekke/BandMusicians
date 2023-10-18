import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import fs from 'fs';
const musicianInfoData = 'musicianInfo.json';

export class Musician {
  static musicianCount = 0;
  static musicianData = [];

  constructor(name, info, birthYear, bands, formerBands, instruments) {
    this.name = name;
    this.info = info;
    this.birthYear = birthYear;
    this.bands = bands;
    this.formerBands = formerBands;
    this.instruments = instruments;

    Musician.musicianCount++;
  }

  static RemoveMusician() {
    console.clear();
    console.log("Which musician would you like to remove? Do so by picking their number.");
    console.log("Here are your existing musicians:");
    musicianInfoData.forEach((obj, i) => {
      console.log(`${i + 1}. ${obj.name}`);
    });

    let whichToRemove = parseInt(prompt());

    if (whichToRemove > 0 || whichToRemove < Musician.musicianCount) {
      musicianData.splice(whichToRemove - 1, 1);
      console.log("Musician removed!");
    } else {
      console.log("You did not enter a valid option!");
    }

    console.log("Remaining musicians:");
    musicianData.forEach((obj, i) => {
      console.log(`${i + 1}. ${obj.name}`);
    });
  }

}

export function createMusician() {
  let name = '';
  let birthYear = '';
  let bands = '';
  let instruments = '';

  do {
    name = prompt("Enter the musician's name - ");
    if (name.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (name.length <= 1);

  const info = prompt("Enter any info about the musician here if you want - ");

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

  const formerBands = prompt("Enter the musician's former bands if he/she had any - ");

  do {
    instruments = prompt("Enter the musician's instruments (separate with commas) - ");
    if (instruments.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (instruments.length <= 1);

  return new Musician(name, info, birthYear, bands.split(","), formerBands, instruments.split(","));
}



/*
export function removeMusician() {
  let musicianData = [];

  try {
    const oldMusicianData = fs.readFileSync(musicianInfoData);
    musicianData = JSON.parse(oldMusicianData);
  } catch (error) {
    console.log(error);
  }

  console.log("Here are your existing musicians.");
  musicianData.forEach((obj, i) => {
    console.log(`${i + 1}. ${obj.name}`);
  });

  console.log("Here are your existing musicians.");
  musicianInfoData.forEach((obj, i) => {
    console.log(`${i + 1}. ${obj.name}`);
  });

  const musicianRemover = prompt("Enter the number of the musician you want to remove - ")

  //Konvertera 
  const objectMusician = parseInt(musicianRemover) - 1;

  if (objectMusician >= 0 || objectMusician < musicianInfoData) {
    const removedMusician = musicianInfoData.splice(objectMusician, 1);
    fs.writeFileSync('./musicianInfo.json', JSON.stringify(musicianInfoData, null, 2));

    console.log(`${removedMusician.name} has been removed.`)
  } else {
    console.log("You number you entered is not valid!");
  }

}
*/