export class Band {
  static bandCount = 0;

  constructor(name, info, formedYear, disbandedYear, members, formerMembers) {
    this.name = name;
    this.info = info;
    this.disbandedYear = disbandedYear;
    this.formedYear = formedYear;
    this.members = members;
    this.formerMembers = formerMembers;

    Band.bandCount++;

  }
}
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

export function createBand() {

  let name = '';
  let formedYear = '';
  let bandDisbanded = '';
  let disbandedYear = '';
  let members = '';
  let formerMembers = '';


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
      console.log("You did not enter a valid year!");
    }
  } while (formedYear.length !== 4 || isNaN(formedYear));

  console.log("Is the band still going?");
  console.log("1. Yes");
  console.log("2. No");

  bandDisbanded = prompt("Enter your option - ");

  if (bandDisbanded === "2") {
    disbandedYear = prompt("What year did they disband? (4 numbers) - ");
    if (disbandedYear.length !== 4 || isNaN(disbandedYear)) {
      console.log("You did not enter a valid year!");
    } else {
      console.log(`The band disbanded in ${disbandedYear}.`);
    }
  } else if (bandDisbanded === "1") {
    console.log("The band is still going.");
  } else {
    console.log("Invalid option. Please enter 1 or 2.");
  }

  do {
    members = prompt("Enter the band's members (separate with commas) - ");
    if (members.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (members.length <= 1);


  while (true) {
    console.log("Does the band have any former members?");
    console.log("1. Yes");
    console.log("2. No");

    let formerMembersOption;
    do {
      formerMembersOption = prompt("Enter your option - ");
      if (formerMembersOption === "1") {
        formerMembers = prompt("Enter the band's former members (separate with commas) - ");
      } else if (formerMembersOption === "2") {
        formerMembers = '';
      } else {
        console.log("Invalid option. Please enter 1 or 2.");
      }
    } while (formerMembersOption !== "1" && formerMembersOption !== "2");

    return new Band(name, info, formedYear, disbandedYear, members.split(","), formerMembers.split(","));
  }




  return new Band(name, info, formedYear, disbandedYear, members.split(","), formerMembers.split(","));
}
