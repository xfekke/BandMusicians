export class Band {
  constructor(name, info, formedYear, disbandedYear, members, formerMembers) {
    this.name = name;
    this.info = info;
    this.formedYear = formedYear;
    this.disbandedYear = disbandedYear;
    this.members = members;
    this.formerMembers = formerMembers;
  }
}

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

export function createBand() {
  let name = '';
  let formedYear = '';
  let bands = '';
  let bandDisbanded = '';
  let disbandedYear = '';

  do {
    name = prompt("Enter the band's name - ");
    if (name.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (name.length <= 1);

  const info = prompt("Enter any info about the band here if you want - ");

  do {
    formedYear = prompt("Enter the year the band was formed (4 numbers) - ");
    if (formedYear.length !== 4 || isNaN(formedYear)) {
      console.log("You did not enter a valid year)!");
    }
  } while (birthYear.length !== 4 || isNaN(birthYear));

  console.log("Is the band still going?")
  console.log("1. Yes")
  console.log("2. No")
  do {
    bandDisbanded = prompt("Enter your option - ");
    if (bandDisbanded == 2) {
      disbandedYear = prompt("What year did they disband? (4 numbers) - ");
    }
  } while (bandDisbanded !== 1 || bandDisbanded !== 2);


  do {
    bands = prompt("Enter the musician's bands (separate with commas) - ");
    if (bands.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (bands.length <= 1);

  const formerBands = prompt("Enter the musician's former bands if he/she had any - ");

  do {
    members = prompt("Enter the band's members (separate with commas) - ");
    if (members.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (members.length <= 1);

  console.log("Does the band have any former members?")
  console.log("1. Yes")
  console.log("2. No")
  do {
    formerMembers = prompt("Enter your option - ");
    if (formerMembers == 1) {
      formerMembers = prompt("Enter the band's former members (separate with commas) - ");
    }
  } while (formerMembers !== 1 || formerMembers !== 2);



  return new Musician(name, info, birthYear, bands.split(","), formerBands, instruments.split(","));
}
