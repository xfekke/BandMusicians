export default class Musician {
  #name;
  #info;
  #birthYear;
  #bands;
  #formerBands;
  #instruments;

  constructor(name, info, birthYear, bands, formerBands, instruments) {
    this.#name = name;
    this.#info = info;
    this.#birthYear = birthYear;
    this.#bands = bands;
    this.#formerBands = formerBands;
    this.#instruments = instruments;
  }

  get name() {
    return this.#name;
  }

  get info() {
    return this.#info;
  }

  get birthYear() {
    return this.#birthYear;
  }

  get bands() {
    return this.#bands;
  }

  get formerBands() {
    return this.#formerBands;
  }

  get instruments() {
    return this.#instruments;
  }

  set name(newName) {
    this.#name = newName;
  }


  dataInfo() {
    return {
      "name": this.#name,
      "info": this.#info,
      "birthYear": this.#birthYear,
      "bands": this.#bands,
      "formerBands": this.#formerBands,
      "intruments": this.#instruments,
    };
  }
}