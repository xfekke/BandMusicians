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
  const name = prompt("Enter the musicians name - ")
  const info = prompt("Enter any info about the musician here - ")
  const birthYear = prompt("Enter the musicians birthyear (yyyy-mm-dd) - ")
  const bands = prompt("Enter the musicians band - ")
  const formerBands = prompt("Enter the musicians former bands if he/she had any - ")
  const instruments = prompt("Enter the musicians instrument (singing counts) - ")

  return new Musician(name, info, birthYear, bands, formerBands, instruments)
}





//Lägg in funktioner här