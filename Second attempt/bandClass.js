export default class Band {
  #name;
  #info;
  #formedYear;
  #disbandedYear;
  #members;
  #formerMembers;

  constructor(name, info, formedYear, disbandedYear, members, formerMembers) {
    this.#name = name;
    this.#info = info;
    this.#formedYear = formedYear;
    this.#disbandedYear = disbandedYear;
    this.#members = members;
    this.#formerMembers = formerMembers;
  }

  get name() {
    return this.#name;
  }

  get info() {
    return this.#info;
  }

  get formedYear() {
    return this.#formedYear;
  }

  get disbandedYear() {
    return this.#disbandedYear;
  }

  get members() {
    return this.#members;
  }

  get formerMembers() {
    return this.#formerMembers;
  }

  set name(newName) {
    this.#name = newName;
  }


  dataInfoBand() {
    return {
      "name": this.#name,
      "info": this.#info,
      "formedYear": this.#formedYear,
      "disbandedYear": this.#disbandedYear,
      "members": this.#members,
      "formerMembers": this.#formerMembers,
    };
  }
}