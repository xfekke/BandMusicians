export class Musician {
  constructor(name, info, birthYear, bands, formerBands, instruments) {
    this.name = name;
    this.info = info;
    this.birthYear = birthYear;
    this.bands = bands;
    this.formerBands = formerBands;
    this.instruments = instruments;
  }
}

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

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
    birthYear = prompt("Enter the musician's birthyear (yyyy-mm-dd) - ");
    if (birthYear.length !== 8 || isNaN(birthYear)) {
      console.log("Enter the birthyear in 8 numbers like this: (yyyy-mm-dd)!");
    }
  } while (birthYear.length !== 8 || isNaN(birthYear));

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
