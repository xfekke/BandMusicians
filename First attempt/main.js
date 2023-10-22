import PromptSync from "prompt-sync";
import { Musician } from "./musicianIndex.js";
import { Band } from "./bandIndex.js";
import fs from "fs";
const prompt = PromptSync({ sigint: true })
const musicianInfoData = 'musicianInfo.json';
const bandInfoData = 'bandInfo.json';
//1. Add Musician - 2. Add Band - 3. Remove musician - 4. Remove Band - 5. Add musician to band - 6. remove musician from band
//7. Info about musician - 8. Info about band - 9. Quit




let menyOption; //Meny variable
let musicianData = [];//Musicians in JSON
let bandData = []; //Bands in JSON
try {
  const oldMusicianData = fs.readFileSync(musicianInfoData);
  musicianData = JSON.parse(oldMusicianData);
} catch (error) {
  musicianData = []
  console.log(error)
}

try {
  const oldBandData = fs.readFileSync(bandInfoData);
  bandData = JSON.parse(oldBandData);
} catch (error) {
  bandData = []
  console.log(error)
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
      musicianData.push(newMusician);


      fs.writeFile(musicianInfoData, JSON.stringify(musicianData, null, 2), (err) => {
        if (err) {
          console.error('An error occured:', err);
        } else {
          console.log('The musician has been saved.');
        }
      });

      break;

    case "2":
      console.log(musicianData);
      hello();

      break;

    case "3":
      removeMusicianx();

      break;

    case "4":
      const newBand = createBand();
      bandData.push(newBand);


      fs.writeFile(bandInfoData, JSON.stringify(bandData, null, 2), (err) => {
        if (err) {
          console.error('An error occured:', err);
        } else {
          console.log('The band has been saved.');
        }
      });

      break;

    default:
      console.log("You did not enter a valid option.")
  }

}

function hello() {
  console.log("Hello World!")
}

function removeMusicianx() {
  console.log(musicianData);
  var removeMusicianvar = prompt("Which musician to remove?")


  musicianData.splice(removeMusicianvar, 1); // 2nd parameter means remove one item only

  console.log(musicianData);
  prompt("Press enter to continue");
}

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


  console.log(Musician);
  return new Musician(name, info, birthYear, bands.split(","), formerBands, instruments.split(","));


}