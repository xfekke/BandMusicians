import PromptSync from "prompt-sync";
import { Musician } from "./musicianIndex.js";
import { Band } from "./bandIndex.js";
import fs from "fs";
const prompt = PromptSync({ sigint: true })
const musicianInfoData = 'musicianInfo.json';
const bandInfoData = 'bandInfo.json';
//1. Add Musician - 2. Add Band - 3. Remove musician - 4. Remove Band - 5. Add musician to band - 6. remove musician from band
//7. Info about musician - 8. Info about band - 9. Quit

//const newMusician = ''; //Musician created in case 1
let menyOption; //Meny variable
let existingMusician = []; //Musicians in the JSON
let updatedMusician = []; //New variable for musicians to save in JSON
let existingBand = []; //Bands in the JSON
const currentYear = new Date().getFullYear();

try {
  const jsonMusician = fs.readFileSync(musicianInfoData);
  existingBand = JSON.parse(jsonBand);
} catch (error) {
  existingMusician = []
  console.error("Error reading JSON file" + error);
}

try {
  const bandJSON = fs.readFileSync(bandInfoData);
  existingMusician = JSON.parse(jsonMusician);
} catch (error) {
  existingMusician = []
  console.error("Error reading JSON file" + error);
}

while (true) {
  console.log("Hello! What would you like to do?")
  console.log("1. Create musician")
  console.log("2. Show musicians")
  console.log("3. Remove musician")
  console.log("4. Create band")
  console.log("5. Show bands")
  console.log("6. Remove band")
  menyOption = prompt("Enter your option - ")

  switch (menyOption) {
    case "1":
      const newMusician = createMusician();
      existingMusician.push(newMusician)

      break;

    case "2":
      console.log(jsonMusician);

      break;

    case "3":

      break;

    case "4":
      const newBand = createBand();
  }
}


// function createMusician() {
//   let name = '';
//   let birthYear = '';
//   let bands = '';
//   let instruments = '';
//   let info = '';
//   let formerBands = '';

//   do {
//     name = prompt("Enter the musician's name - ");
//     if (name.length < 2) {
//       console.log("You have to enter at least 2 characters!");
//     }
//   } while (name.length < 2);

//   info = prompt("Enter any info about the musician here if you want - ");

//   do {
//     birthYear = prompt("Enter the musician's birthyear (4 numbers) - ");
//     if (birthYear.length != 4 || isNaN(birthYear)); {
//       console.log("You did not enter a valid year!");
//     }
//   } while (birthYear.length != 4 || isNaN(birthYear));


//   do {
//     bands = prompt("Enter the musician's current bands (separate with commas) -");
//     if (bands.length < 2) {
//       console.log("You have to enter at least 2 characters!");
//     }
//   } while (bands.length < 2);

//   formerBands = prompt("Enter the musician's former bands if he/she had any (separate with commas) - ");

//   do {
//     instruments = prompt("Enter the musician's instruments (separate with commas) - ");
//     if (instruments.length < 2) {
//       console.log("You have to enter at least 2 characters!");
//     }
//   } while (instruments.length < 2);

//   const newMusician = new Musician(name, info, birthYear, bands, formerBands, instruments);
//   console.log(newMusician);

//   savedMusician.push(musicianInfoData);

//   console.log(updatedMusician);
//   console.log("The musician has been saved!");
//   console.log(newMusician);



//   fs.writeFile('musicianInfo.json', JSON.stringify(newMusician, null, 2), (err) => {
//     console.log("Hello");
//     if (err) {
//       console.error("An error occurred: " + err);
//     } else {
//       console.log("Musician has been saved to the JSON.");
//     }
//   }); console.log("Bye");
// }
// export function createMusician() {
//   let name = '';
//   let birthYear = '';
//   let bands = '';
//   let instruments = '';

//   do {
//     name = prompt("Enter the musician's name - ");
//     if (name.length <= 1) {
//       console.log("You have to enter at least 2 characters.");
//     }
//   } while (name.length <= 1);

//   const info = prompt("Enter any info about the musician here if you want - ");

//   do {
//     birthYear = prompt("Enter the musician's birthyear (4 numbers) - ");
//     if (birthYear.length !== 4 || isNaN(birthYear)) {
//       console.log("You did not enter a valid year)!");
//     }
//   } while (birthYear.length !== 4 || isNaN(birthYear));

//   do {
//     bands = prompt("Enter the musician's bands (separate with commas) - ");
//     if (bands.length <= 1) {
//       console.log("You have to enter at least 2 characters.");
//     }
//   } while (bands.length <= 1);

//   const formerBands = prompt("Enter the musician's former bands if he/she had any - ");

//   do {
//     instruments = prompt("Enter the musician's instruments (separate with commas) - ");
//     if (instruments.length <= 1) {
//       console.log("You have to enter at least 2 characters.");
//     }
//   } while (instruments.length <= 1);

//   return new Musician(name, info, birthYear, bands.split(","), formerBands, instruments.split(","));
// }




function createMusician() {
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

  const newMusician = new Musician(name, info, birthYear, bands.split(","), formerBands, instruments.split(","));

  const musicianJSON = JSON.stringify(newMusician, null, 2);
  fs.writeFileSync('./musicianInfo.json', musicianJSON, 'utf-8', (err) => {
    if (err) {
      console.error("Error saving JSON file:", err);
    } else {
      console.log("Musician has been saved!");
    }
  });

  console.log(newMusician);
  return new Musician


}
/*
function createBand() {
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

  console.log("Does the band have any former members?");
  console.log("1. Yes");
  console.log("2. No");

  if (bandDisbanded == 2) {
    do {
      formerMembers = prompt("Enter the band's former members (seperate with commas) - ");
      if (formerMembers.length < 2) {
        console.log("You have to enter at least 2 characters.");
      } else {
        console.log("You have added the former members.");
      }
    } while (members.length < 2);
  }

  if (bandDisbanded == 1) {
    formerMembers = prompt("Enter the band's former members (seperate with commas) - ");
  } else {
    console.log("You did not add any former members")



    const newBand = new Band(name, info, formedYear, disbandedYear, members.split(","), formerMembers.split(","));

    const bandJSON = JSON.stringify(newBand, null, 2);
    fs.writeFileSync('./musicianInfo.json', bandJSON, 'utf-8', (err) => {
      if (err) {
        console.error("Error saving JSON file:", err);
      } else {
        console.log("The band has been saved!");
      }
    });
  }


}
*/

function createBand() {
  let name = '';
  let info = '';
  let formedYear = '';
  let bandDisbanded = '';
  let disbandedYear = '';
  let members = '';
  let formerMembers = '';
  let formerMembersTwo = '';

  do {
    name = prompt("Enter the band's name - ");
    if (name.length <= 1) {
      console.log("You have to enter at least 2 characters.");
    }
  } while (name.length <= 1);

  info = prompt("Enter any info about the band here if you want - ");

  do {
    formedYear = prompt("Enter the year the band was formed (4 numbers) - ");
    if (formedYear.length !== 4 || isNaN(formedYear || formedYear > currentYear)) {
      console.log("You did not enter a valid year!");
    }
  } while (formedYear.length !== 4 || isNaN(formedYear || formedYear > currentYear));


  console.log("Is the band still going?");
  console.log("1. Yes");
  console.log("2. No");
  bandDisbanded = prompt("Enter your option - ");

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

  if (bandDisbanded === "2") {
    do {
      disbandedYear = prompt("What year did they disband? (4 numbers) - ");
      if (disbandedYear.length === 4 || !isNaN(disbandedYear) || parseInt(disbandedYear) > parseInt(formedYear)) {
        console.log(`The band disbanded in ${disbandedYear}.`);
        break;
      } else {
        console.log("You did not enter a valid year!");
      }
    } while (true);
  }

  if (bandDisbanded === "1") {
    console.log("Does the band have any former members?");
    console.log("1. Yes");
    console.log("2. No");
    formerMembersTwo = prompt("Enter your option - ");

    if (formerMembersTwo === "2") {
      console.log("You did not add any former members.")
    }

    console.log(members);
  } else {
    do {
      formerMembers = prompt("Write the name of the former members (seperate with commas) - ");
      if (formerMembers.length < 2) {
        console.log("You have to enter at least 2 characters!");
      } else {
        console.log(`You have added the former members!`);
        console.log(formerMembers);
      }

    } while (formerMembers.length >= 2);
  }

  const newBand = new Band(name, info, formedYear, disbandedYear, members.split(","), formerMembers.split(","));

  const bandJSON = JSON.stringify(newBand, null, 2);
  fs.writeFileSync('./musicianInfo.json', bandJSON, 'utf-8', (err) => {
    if (err) {
      console.error("Error saving JSON file:", err);
    } else {
      console.log("The band has been saved!");
    }
  });
}

