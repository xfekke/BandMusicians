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

    return new Band(name, info, formedYear, disbandedYear, members, formerMembers);
  }
}