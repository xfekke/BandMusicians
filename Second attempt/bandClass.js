export default class Band {
  #name;
  #info;
  #disbandedYear;
  #formedYear;
  #members;
  #formerMembers;

  constructor(name, info, disbandedYear, formedYear, members, formerMembers) {
    this.#name = name;
    this.#info = info;
    this.#disbandedYear = disbandedYear;
    this.#formedYear = formedYear;
    this.#members = members;
    this.#formerMembers = formerMembers;
  }

  get name() {
    return this.#name;
  }

  get info() {
    return this.#info;
  }

  get disbandedYear() {
    return this.#disbandedYear;
  }

  get formedYear() {
    return this.#formedYear;
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
      "disbandedYear": this.#disbandedYear,
      "formedYear": this.#formedYear,
      "members": this.#members,
      "formerMembers": this.#formerMembers,
    };
  }
}